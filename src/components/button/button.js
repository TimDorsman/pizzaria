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
        const { link, customClass, onClick, type, classLink, children } = this.props;
        return (
            link ?
            <a href={link} className={`buttonLink ${classLink ? classLink : ''}`}>
            <button className={customClass} onClick={onClick} type={type}>{children}</button>
            </a>
            :
            <button className={customClass} onClick={onClick}>{children}</button>
        )
    }
}
