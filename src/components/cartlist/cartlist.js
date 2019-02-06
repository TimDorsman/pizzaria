import React, { Component } from 'react';
import './cartlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toggleShoppingList } from '../../functions/toggleShoppingList'

export default class CartList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pizzas: [],
            status: null,
            amount: this.props.amount
        }
        this.renderPizzasInList = this.renderPizzasInList.bind(this)
        this.localStorageUpdated = this.localStorageUpdated.bind(this)
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            let items = `[${localStorage.getItem('list')}]`;
            let allPizzas = JSON.parse(items);
            this.setState (() => ({
                pizzas: [...allPizzas],
                status: localStorage.getItem('list') ? true : false
            }))
            window.addEventListener('storage', this.localStorageUpdated)
        }
    }
    componentWillUnmount(){
        // window.removeEventListener('storage', this.localStorageUpdated)
    }
    renderPizzasInList() {
        let items = `[${localStorage.getItem('list')}]`;
        let allPizzas = JSON.parse(items);
        this.setState (() => ({
            pizzas: [...allPizzas]
        }))
    }

    totalAmountPizza() {
        let items = `[${localStorage.getItem('list')}]`;
        let allPizzas = JSON.parse(items);
        let total = 0; 
        console.log(allPizzas);
        allPizzas.forEach(item => {
           total+= this.pricePizza(item.price, item.amount);
        })

        return total;
    }

    pricePizza(price, amount) {

        return parseInt(price) * parseInt(amount);
    }

    localStorageUpdated() {
        if (!localStorage.getItem('list')) {
            this.updateState(false)
        } 
        else if (!this.state.status) {
            this.updateState(true)
        }
    }
    updateState(value) {
        this.setState({status: value})
    }
    render() {
        return (
            <div className='cartList'>
                <div className='cartListHeader'>
                    <FontAwesomeIcon icon="times" className='cartListClose fa-2x' onClick={toggleShoppingList}/>
                </div>
                <ul className='pizzaList'>
                    {this.state.pizzas[0] != null ? this.state.pizzas.map((pizza, i) => {
             return <li className='cartListItem' key={i} onClick={this.renderPizzasInList}>
                        <img src={require('../../images/' + pizza.img)} className='cartListImage'/>
                        <div>
                            <p>{pizza.name}</p>
                            <p>{pizza.price} x {pizza.amount}</p>
                            <p>{this.pricePizza(pizza.price, pizza.amount)}</p>
                        </div>
                    </li>
                    }) : ''}
                    <li className='classListTotal'><span>Total amount: </span>€{this.totalAmountPizza()}</li>
                </ul>
            </div>
        )
    }
}