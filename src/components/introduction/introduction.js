import React, { Component } from 'react';
import './introduction.scss';
import '../../general/main.scss';
import Button from '../button/button'
import Title from '../title/title';

export default class Introduction extends Component {
    render() {
        return (
            <>
                <Title className='slideTitle'>About</Title>
                <div className='introduction'>
                    <h2>El pizzarino</h2>
                    <p>started in 1965 in a Rijswijk's neighbourhood.
                        Many locals would come for a delicious pizza after work or in their free time.
                        Together with partners we have expanded and got numerous awards such as 'Fastest pizzachef 1996' and 'Worldwide pizza championship 2015' worldwide.
                        Our plans for the future are enlarging the menu with chicken wings and other treats.
                </p>
                    <Button classLink='introductionButton' customClass='buttonSecundary' link='/pizzas'>Check out what we sell</Button>
                </div>
            </>
        )
    }
}