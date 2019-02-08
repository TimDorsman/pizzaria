import React, { Component } from 'react';
import './button.scss';
import '../../general/main.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            
            this.props.link ? 
            <a href={this.props.link} className={`buttonLink ${this.props.classLink ? this.props.classLink : ''}`}>
            <button className={this.props.class} onClick={this.props.onClick}>{this.props.children}</button>
            </a>
            :
            <button className={this.props.class} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}
