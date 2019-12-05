import React, { Component } from 'react';
import './footer.scss';
import '../../general/main.scss';
import Button from '../button/button';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footeritems:
            {
                street: 'P.C Hooftstraat',
                postcode: '2834 KM',
                email: 'tim.dorsman@hotmail.com',
                tel: '+31624849603'
            }
        }
    }

    render() {
        return (
            <footer className='footer'>
                <ul className='footerList'>
                    {Object.entries(this.state.footeritems).map((entry, i) => {
                        let value = entry[1];

                        return (
                            <li key={i}>
                            <p>{value}</p>
                            </li>
                        )
                    })}
                </ul>
                <ul className='footerList'>
                    <li className='footerListItem'><p className='newsLetterTitle'>Subscribe to the newsletter</p></li>
                    <li className='footerListItem'><input type='text' placeholder='E-mail' className='newsLetterInput'/></li>
                    <li className='footerListItem'><Button customClass='buttonSecundary newsLetterButton'>Send</Button></li>
                </ul>
            </footer>
        )
    }
}
