import React, { Component } from 'react';
import  './form.scss';
import Button from '../../components/button/button'

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
        if(results.length === inputs.length) {
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
            <form onSubmit={this.saveUserData} className='form' onSubmit={(e)=> {this.saveUserData(e)}}>
                <div className='formInputs'>
                        <span>Firstname</span>
                        <input type='text' className='userInput' onChange={this.validate}/>
                        <span>Lastname</span>
                        <input type='text' className='userInput' onChange={this.validate}/>

                        <span>E-mail</span>
                        <input type='email' className='userInput' onChange={this.validate}/>
                        <span>Phone</span>
                        <input type='number' className='userInput' onChange={this.validate}/>
                        <span>Adress</span>
                        <input type='text' className='userInput' onChange={this.validate}/>
                </div>
                {this.state.continue ? <Button class='buttonPrimary' classLink='mg-left' link='/checkout/overview'>Submit</Button> : ''}
            </form>
        )
    }
}