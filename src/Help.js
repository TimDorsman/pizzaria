import React, { Component } from 'react';
import Faq from './components/faq/faq';
import Title from './components/title/title';

class Help extends Component {
    render() {
        return (
            <>
                <Title className='slideTitle'>FAQ</Title>
                <Faq />
            </>
        )
    }
}

export default Help;