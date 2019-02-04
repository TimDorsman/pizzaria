import React, { Component } from 'react';

import './title.scss';
export default class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState = ({
            hasError: true
        });
    }
    render() {
        return (
            <>  {
                this.props.title ? <h1 className={this.props.className}>{this.state.title.toUpperCase()}</h1> : console.warn('You forgot to add a title attribute to the Title component')
                }
            </>
        )
    }
}