import React, { Component } from 'react';
import './faq.scss';
import $ from 'jquery';

export default class Faq extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FAQ: [
                {
                    item: {
                        question: 'What\'s the average delivery time?',
                        answer: 'We\'re aiming for 15-30 minutes per delivery.'
                    }
                },
                {
                    item: {
                        question: 'I don\'t like the sauce on my pizza, what can i do?',
                        answer: 'You could scrape it off or order a new pizza.'
                    }
                },
                {
                    item: {
                        question: 'Do you have job applications?',
                        answer: 'Yes! We\'re looking for deliveryboys.'
                    }
                },
                {
                    item: {
                        question: 'Can i pay in cash?',
                        answer: 'The deliveryboy will have cash on him.'
                    }
                },
                {
                    item: {
                        question: 'How often are the discounts?',
                        answer: 'We can\'t give you a good answer. Usually it\'s every 3 - 6 weeks.'
                    }
                },
                {
                    item: {
                        question: 'Im allergic to certain ingredients.',
                        answer: 'You could write down in the comment what ingredients you\'re alergic to.'
                    }
                }
            ]
        }
    }

    toggleFaq(e) {
        e.stopPropagation()

        $(e.target).siblings().slideToggle();
    }
    
    render() {
        return (
            <div className='helpContainer'>
                <ul className='help'>
                    {this.state.FAQ.map((faq, i) => {
                return <li key={i} className='helpItem'>
                            <div data-list={i} className='helpItemClick' onClick={this.toggleFaq}><p>{faq.item.question}</p></div>
                            <div data-list={i} style={{display: 'none' }}><p>{faq.item.answer}</p></div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}