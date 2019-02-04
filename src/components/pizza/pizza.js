import React, { Component } from 'react';
import './pizza.scss';
import $ from 'jquery';

export default class Pizza extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pizzas: this.props.data,
            name: '',
            amount: null,
            elements: null,
            items: ['cheese']
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

    addToCart(e, i) {
        e.preventDefault();
        const { pizzas } = this.state
        const newItem = 'test';
        localStorage.setItem('pizzas', )
        this.setState ({
            name: pizzas[i].name,
            img: pizzas[i].img

        }, () => {
            console.log(this.state.name, this.state.img);
            console.log(this.state.pizzas[i]);
        })
    }

    render() {
        return (
            this.state.pizzas.map((item, i) => {
     return <form key={i} className='pizza' onSubmit={(e)=> {this.addToCart(e, i)}}>
                <div className='pizzaTop'>

                    { item.sale ? (<div className='pizzaSale'><span className='pizzaSaleText'>Sale!</span></div>) : '' }
                    <h3 className='pizzaName'>{item.name}</h3>
                    <img src={require('../../images/' + item.img)} className='pizzaImage' onMouseOver={this.showCover} alt={item.name}/>
                    <div className='pizzaCover' onMouseLeave={this.hideCover}>
                        <h4 className='pizzaIngredientsTitle'>Ingredients:</h4>
                        <p className='pizzaIngredients'>{item.ingredients}</p>
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

