import React, { Component } from 'react';
import Button from '../../components/button/button'
import Title from '../title/title';
import Input from '../input/input';
import './form.scss';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            continue: false
        }
        this.validate = this.validate.bind(this);
    }

    saveUserData(e) {
        e.preventDefault();
        const inputs = document.querySelectorAll('.userInput');

        const userData = {
            firstname: inputs[0].value,
            lastname: inputs[1].value,
            email: inputs[2].value,
            phone: inputs[3].value,
            adress: inputs[4].value
        }

        const strUserData = JSON.stringify(userData);

        localStorage.setItem('user', strUserData)
        window.location.href = 'checkout/overview';
    }

    validate() {
        const inputs = document.querySelectorAll('.userInput');
        const arr = [];

        inputs.forEach(el => arr.push(el))

        const results = arr.filter(input => input.value !== '');
        if (results.length === inputs.length) {
            this.setState({
                continue: true
            })
        }
        else {
            this.setState({
                continue: false
            })
        }
    }

    render() {
        return (
            <>
                <Title className='slideTitle'>Hello</Title>
                <form className='form' onSubmit={(e) => { this.saveUserData(e) }}>
                    <div className='formInputs'>
                        <Input type='text' customClass='userInput' formInput onChange={this.validate} name='Firstname' />
                        <Input type='text' customClass='userInput' formInput onChange={this.validate} name='Lastname' />
                        <Input type='email' customClass='userInput' formInput onChange={this.validate} name='E-mail' />
                        <Input type='number' customClass='userInput' formInput onChange={this.validate} name='Phone' />
                        <Input type='text' customClass='userInput' formInput onChange={this.validate} name='Adress' />
                        {this.state.continue ? <Button customClass='buttonPrimary buttonRight' classLink='mg-left' link='/checkout/overview'>Submit</Button> : ''}
                    </div>
                </form>
            </>
        )
    }
}