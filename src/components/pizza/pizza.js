import React, { Component } from 'react';
import './pizza.scss';
import $ from 'jquery';
import Button from '../button/button';
export default class Pizza extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pizzas: this.props.data,
            name: '',
            amount: null,
            elements: null,
            shoppingList: []
        }
        this.showCover = this.showCover.bind(this)
        this.hideCover = this.hideCover.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    showCover(e) {
        $(e.target).siblings('.pizzaCover').fadeIn();
    }

    hideCover(e) {
        $(e.target).fadeOut();
	}

	findIndex() {

		//transform the localStorage into an array
		let items = `[${localStorage.getItem('list')}]`;

		//transform the array (string) into a real array
		let array = JSON.parse(items);

		return array
	}

    addToCart(e, item) {
        e.preventDefault();
        if($(e.target).find('.pizzaAmount')[0].value <= 0)
        return;
        const amount = $(e.target).find('.pizzaAmount')[0].value;
        //get data from clicked item and put it into an object
        const newItem = {
            name: item.name,
            price: item.price,
            img: item.img,
            amount: amount,
        };

        //transform the object into a string
        let strNewItem = JSON.stringify(newItem)


        //If localStorage exists
        if(localStorage.getItem('list') != null) {

            //transform the localStorage into an array
            let items = `[${localStorage.getItem('list')}]`;

            //transform the array (string) into a real array
            let array = JSON.parse(items);

            //loop over the array

            array.forEach((item, i) => {
                //check if pizza is already in the list
                if(item.name === newItem.name) {
                    //+1 amount to the pizza thats in the list
                    item.amount = parseInt(item.amount) + parseInt(newItem.amount);

                    //convert array back into a string
                    let strArray = JSON.stringify(array);

                    //remove square brackets so its not an array anymore
                    let replArray = strArray.replace(/[[\]]+/g, '')

                    //add the list to the localStorage
                    localStorage.setItem('list', replArray)
                    //leave the function
                    return false;
                }
                //If the loop hasn't found any results then add the pizza to the list
                if(i === array.length - 1) {
                    //add new pizza to the array
                    array = JSON.parse(`[${localStorage.getItem('list')}]`);
                    array.push(newItem)
                    //remove square brackets so its not an array anymore
                    let strArray = JSON.stringify(array)
                    let replArray = strArray.replace(/[[\]]+/g, '')

                    localStorage.setItem('list', replArray)
                }
            })
        }
        //localStorage doesn't exist yet
        else {
            localStorage.setItem('list', strNewItem);
        }
    }

    render() {
        return (
            this.state.pizzas.map((item, i) => {
    return <form key={i} className='pizza' onSubmit={(e)=> {this.addToCart(e, item, i)}}>
                <div className='pizzaTop'>

                    { item.sale ? (<div className='pizzaSale'><span className='pizzaSaleText'>Sale!</span></div>) : '' }
                    <h3 className='pizzaName'>{item.name}</h3>
                    <img src={require('../../images/' + item.img)} className='pizzaImage' onMouseOver={this.showCover} alt={item.name}/>
                    <div className='pizzaCover' onMouseLeave={this.hideCover}>
                        <h4 className='pizzaIngredientsTitle'>Ingredients:</h4>
                        <p className='pizzaIngredients'>{item.ingredients}</p>
                        <h2 className='pizzaPrice'>€ {item.price}</h2>
                    </div>
                </div>
                <div className='pizzaBottom'>
                    <p>{item.description}</p>
                    <div className='pizzaInputs'>
                        <input type='number' defaultValue='' placeholder='Amount' className='pizzaAmount'/>
                        {/* <button type="submit" className='pizzaButton'>Add to cart</button> */}
                        <Button customClass='pizzaButton buttonPrimary' type='submit'>Add to cart</Button>
                    </div>
                </div>
            </form>
            })
        )
    }
}

