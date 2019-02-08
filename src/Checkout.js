import React, { Component } from 'react';
import Form from './components/form/form'

export default class Checkout extends Component {

    componentWillMount() {
        if(!localStorage.getItem('list'))
        window.location.href = '/pizzas'
    }

    render() {
        return (
            <div>
                <Form />
            </div>
        )
    }
}