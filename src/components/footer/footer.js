import React, { Component } from 'react';
import './footer.scss';
import '../../general/main.scss';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footeritems: 
            {
                street: 'P.C Hooftstraat',
                postcode: '2834 KM',
                email: 'tim.dorsman@hotmail.com',
                tel: '+31 625248697'
            }
        }
    }

    

    render() {
        return (
            <footer className="footer">
                <ul className="footerList">
                    {Object.entries(this.state.footeritems).map((entry, i) => {
                        let value = entry[1];

                        return (
                            <li key={i}>
                            <p>{value}</p>
                            </li>
                        )
                    })}
                </ul>
            </footer>
        )
    }
}
