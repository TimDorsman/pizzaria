import React, { Component } from 'react';
import CartList from '../../components/cartlist/cartlist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Cart extends Component {
    
    render() {
        return (
            <div className='cart'>
                <FontAwesomeIcon icon="shopping-cart" />
            </div>
        )
    }
}