import React, { Component } from 'react';
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