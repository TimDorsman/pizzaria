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
            Firstname: inputs[0].value,
            Lastname: inputs[1].value,
            Email: inputs[2].value,
            Phone: inputs[3].value,
            Adress: inputs[4].value
        }

        const strUserData = JSON.stringify(userData);

        localStorage.setItem('user', strUserData)
        window.location.href = 'checkout/overview';
    }

    validate() {
        const inputs = document.querySelectorAll('.userInput');
        const arr = [];
        let cond = false;

        inputs.forEach(el => arr.push(el))
        const results = arr.filter(input => input.value !== '');

        results.length === inputs.length ? cond = true : cond = false;

        this.setState({
            continue: cond
        })
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
                        {this.state.continue ? <Button customClass='buttonPrimary buttonRight' linkClassk='mg-left' link='/checkout/overview'>Submit</Button> : ''}
                    </div>
                </form>
            </>
        )
    }
}