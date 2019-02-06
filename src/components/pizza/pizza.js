import React, { Component } from 'react';
import './pizza.scss';
import $ from 'jquery';
import CartList from '../../components/cartlist/cartlist';
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
	
	findIndex(el) {

		//transform the localStorage into an array
		let items = `[${localStorage.getItem('list')}]`;

		//transform the array (string) into a real array
		let array = JSON.parse(items);

		return array
	}

    addToCart(e, item, i) {

        e.preventDefault();

        //get data from clicked item and put it into an object
        const newItem = {
            name: item.name,
            price: item.price,
            img: item.img,
            amount: item.amount
        };

        //transform the object into a string
        let strNewItem = JSON.stringify(newItem)

        //If localStorage exists
        if(localStorage.getItem('list') != null) {

            //transform the localStorage into an array
            let items = `[${localStorage.getItem('list')}]`;

            //transform the array (string) into a real array
            let array = JSON.parse(items);

            // localStorage.setItem('list', `${localStorage.getItem('list')}, ${strNewItem}`)

            console.log(array);

            //loop over the array
            for(let i = 0; i < array.length; i++) {
				//check if pizza is already in the list
				console.log(array[i]);
				console.log(newItem.name);
                if(array[i].name === newItem.name) {
                    //+1 amount to the pizza thats in the list
                    array[i].amount += 1;

                    //convert array back into a string
                    let strArray = JSON.stringify(array);

                    //remove square brackets so its not an array anymore
                    let replArray = strArray.replace(/[\[\]]+/g, '')

                    //add the list to the localStorage
                    localStorage.setItem('list', replArray)
                    //leave the function
                    console.log(localStorage.getItem('list'))
                    return false;
				}
				//If the loop hasn't found any results then add the pizza to the list
                if(i == array.length - 1) {
                    console.log('pizza is not in the list yet')
                    console.log(array);
                    //add new pizza to the array
                    array = JSON.parse(`[${localStorage.getItem('list')}]`);
                    console.log(array);
                    array.push(newItem)
                    //remove square brackets so its not an array anymore
                    let strArray = JSON.stringify(array)
                    let replArray = strArray.replace(/[\[\]]+/g, '')

                    console.log(replArray);

                    localStorage.setItem('list', replArray)
                    console.log(localStorage.getItem('list'));
                }
            }
        }
        //localStorage doesn't exist yet
        else {
            localStorage.setItem('list', strNewItem);
            console.log('STORAGE DOESNT EXIST YET, CREATING STORAGE')
            console.log(localStorage.getItem('list'))
        }






















        // if(localStorage.getItem('list') !== null) {
        //     let items = `[${localStorage.getItem('list')}]`;
        //     let newItems = JSON.parse(items);
        //     newItems.find((element, index) => {
        //         // return element.name === newItem.name;
        //         if(element.name === newItem.name) {
        //             newItems[index].amount += 1

        //             localStorage.setItem('list', `${localStorage.getItem('list')}, ${JSON.stringify(newItem)}`);

        //         }
        //     });
        //     if(newItems.indexOf(newItem)) {
        //         // newItem.amount = newItem.amount + 1;
        //     }
        //     else {
        //     }
        // }
        // if(localStorage.getItem('list') && localStorage.getItem('list') !== null) {
        //     localStorage.setItem('list', `${localStorage.getItem('list')}, ${JSON.stringify(newItem)}`);
        // } else {
        //     localStorage.setItem('list', `${JSON.stringify(newItem)}`);
        // }
        // let items = `[${localStorage.getItem('list')}]`;
        // let newItems = JSON.parse(items);

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
                        <input type='number' defaultValue='1' className='pizzaAmount'/>
                        <button type="submit" className='pizzaButton'>Add to cart</button>
                    </div>
                </div>
            </form>
            })
        )
    }
}
