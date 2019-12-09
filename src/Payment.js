import React, { Component } from 'react';
import { paymentOptions } from './mockData';
import Button from './components/button/button'
import './sass/Payment.scss';

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: JSON.parse(localStorage.getItem('user')).firstname,
            paymentoptions: paymentOptions,
            isChecked: false
        }
        this.isOptionChecked = this.isOptionChecked.bind(this);
    }

    componentDidMount() {
        if(!localStorage.getItem('list'))
        window.location.href = '/pizzas'
    }

    isOptionChecked(e) {
        if(e.target.checked) {
            this.setState({
                isChecked: true
            })
        }
    }

    render() {
        return (
            <div className='payment'>
                <ul className='paymentOptions'>
                {this.state.paymentoptions.map((option, i) => {
            return  <li className='option' key={i}>
                        <label htmlFor={option.name} className='optionLabel'>
                            <input type="radio" id={option.name}defaultValue={option.name} name='payment' className='paymentRadio' onClick={(e) => this.isOptionChecked(e)}/>
                            <img src={require(`./images/${option.img}`)} className='paymentImage' alt={option.name} />
                            <p>{option.name}</p>
                        </label>
                    </li>
                })}
                </ul>
                    {this.state.isChecked ? 
                        <Button link='/checkout/confirmation' linkClass='mg-left' customClass='buttonPrimary'>Confirm</Button>
                    : ''}
            </div>
        )
    }
}