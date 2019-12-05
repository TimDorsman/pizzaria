import React, { Component } from 'react';
import './input.scss';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            focus: false
        }
    }

    toggle = (e) =>  {

        if(e.target.value === '')
        this.setState(state => ({
            focus: !state.focus
        }))
    }

    render() {
        return (
            <>
                {this.props.name ? <span class={`formLabel${this.state.focus ? ' formLabelFocus' : ''}`}> {this.props.name} </span> : ''}
                <input type={this.props.type} className={`input${this.props.customClass ? ` ${this.props.customClass}` : ''}`} onFocus={this.toggle} onChange={this.props.onChange} onBlur={(e) => this.toggle(e)}/>
            </>
        );
    }
}

export default Input;