import React, { Component } from 'react';
import { FAQ } from '../../faqData.js'
import './faq.scss';
import $ from 'jquery';

export default class Faq extends Component {
    toggleFaq(e) {
        e.stopPropagation()

        $(e.target).siblings().slideToggle();
    }

    render() {
        return (
            <div className='helpContainer'>
                <ul className='help'>
                    {FAQ.map((faq, i) => {
                        return <li key={i} className='helpItem'>
                            <div data-list={i} className='helpItemQuestion' onClick={this.toggleFaq}><p>{faq.question}</p></div>
                            <div data-list={i} className='helpItemAnswer' style={{ display: 'none' }}><p>{faq.answer}</p></div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}