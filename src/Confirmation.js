import React, { Component } from 'react';
import './sass/Confirmation.scss';

export default class Confirmation extends Component {
    render() {
        return (
            <div className='confirmation'>
                <img src={require('./images/confirmation.png')}  className='confirmationImage' alt='confirmation'/>
            </div>
        )
    }
}