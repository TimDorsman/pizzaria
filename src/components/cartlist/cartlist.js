import React, { Component } from 'react';
import './cartlist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toggleShoppingList } from '../../functions/toggleShoppingList'
import Button from '../../components/button/button'

export default class CartList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pizzas: [],
            status: null,
            amount: this.props.amount,
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
        try {
            let items = `[${localStorage.getItem('list')}]`;
            let allPizzas = JSON.parse(items);
            let total = 0; 
            console.log(allPizzas);
            allPizzas.forEach(item => {
                total+= this.pricePizza(item.price, item.amount);
            })
            localStorage.setItem('total', total);
            return total;
        }
        catch(e) {
            console.log(e);
        }
    }

    pricePizza(price, amount) {
        return parseFloat(price) * parseFloat(amount);
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
                {!localStorage.getItem('list') ? <li>There are no items in your cart</li> : '' }
                    {this.state.pizzas[0] != null ? this.state.pizzas.map((pizza, i) => {
             return <li className='cartListItem' key={i} onClick={this.renderPizzasInList}>
                        <img src={require('../../images/' + pizza.img)} className='cartListImage'/>
                        <div>
                            <p>{pizza.name}</p>
                            <p>€{pizza.price} x {pizza.amount}</p>
                            <p>€{this.pricePizza(pizza.price, pizza.amount)}</p>
                        </div>
                    </li>
                    }) : ''}
                </ul>
                
                    {localStorage.getItem('list') ?<div className='checkout'><span className='cartListTotal'>Total amount: €{this.totalAmountPizza()}</span><Button linkClass='checkoutLink' class='buttonPrimary' link='/checkout'>Checkout</Button></div> : ''}
            </div>
        )
    }
}