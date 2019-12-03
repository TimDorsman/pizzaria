import React, { Component } from 'react';

import './title.scss';
export default class Title extends Component {
    render() {
        return (
            <>  {
                this.props.children ? <h1 className={this.props.className}>{this.props.children.toUpperCase()}</h1> : console.error('You forgot to add a title attribute to the Title component')
                }
            </>
        )
    }
}