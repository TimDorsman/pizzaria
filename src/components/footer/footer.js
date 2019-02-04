import React, { Component } from 'react';
import './footer.scss';
import '../../general/main.scss';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footeritems: 
            [
                {
                    item: {
                        street: 'P.C Hooftstraat',
                        postcode: '2834 KM',
                    }
                },
                {
                    item: {
                        email: 'tim.dorsman@hotmail.com',
                        tel: '31625248697'
                    }
                }
            ]
        }
    }

    render() {
        const items = () => {
            this.state.footeritems.map((item, i) => {
                return item + i
            })
        }
        return (
            <footer className="footer">
                <ul className="footerList">
                    {items()}
                </ul>
            </footer>
        )
    }
}