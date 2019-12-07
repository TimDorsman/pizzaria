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
                    <h2 className='introductionTitle'>El pizzarino</h2>
                    <h4 className="introductionSubtitle">Founded</h4>
                    <p className='introductionText'>Started in 1965 in a Rijswijk's neighbourhood.
                        Many locals would come for a delicious pizza after work or in their free time.
                        Tim D. is the founder of El Pizzarino and he hired his first employee after 2 months!
                        A lot of pizzarias where being build around so he had to compete against low selling pizzas.
                        His tactic was to befriend the customers and make them return on the regular.
                    </p>
                    <h4 className="introductionSubtitle">Awards</h4>
                    <p className='introductionText'>El pizzarino has been rewarded a lot of awards.
                    Fighting against the best pizzarias around the Globe, it made it's first appearance in Japan in 1973.
                    Winning 'Best sea themed pizza' and 'Asia's best dish'. A few years later in 1984 it got awarded 'Best tasting pizza worldwide 1984'.
                    This award flipped D.'s life 180 degrees.
                    </p>
                    <Button linkClass='introductionButton' customClass='buttonSecundary' link='/pizzas'>Wanna try our pizzas?</Button>
                </div>
            </>
        )
    }
}