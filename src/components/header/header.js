import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../components/cart/cart';
import './header.scss';
import '../../general/main.scss';
import { toggleShoppingList } from '../../functions/toggleShoppingList'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'El Pizzarino'
        }
    }

    onClick = () => {
        toggleShoppingList();
        this.props.showCart();
    }

    render() {
        const names = ['About', 'Pizzas', 'Help'];
        return (
            <div className='header'>
                <h1 className='headerTitle'><a href='/'>{this.state.title}</a></h1>
                <ul className='navbar'>
                <Link to='/' className='navbarItemLink'><li className='navbarItem'>Home</li></Link>
                {names.map(function(name, index) {
                    return <Link to={'/' + name.toLowerCase()} key={index} className='navbarItemLink'><li className='navbarItem' key={index}>{name}</li></Link>
                })}
                <li className='navbarItem shoppingCart' onClick={this.onClick}><Cart /></li>
                </ul>
            </div>  
        )
    }
}