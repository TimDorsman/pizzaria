import React, { Component } from 'react';
import { store } from '../../mockData';
import Button from '../../components/button/button';
import Title from '../../components/title/title';

import './new.scss'

export default class New extends Component {

    isEven(val) {
        this.index++;
        return val % 2 ? true : false 
    }
    index = 0;
    render() {
        return (
            <div className='new'>
                <Title title='Welcome!' className='slideTitle slideTitleHome'>Welcome!</Title>
                {store.map((pizza, i) => {
                return pizza.new ? 
                    <div className={`newContainer${this.isEven(this.index) ? ' _reverse' : ''}`} key={i}>
                        <div className='newIntroduction'>
                            <h3 className='newIntroductionTitle'>What's new in store?</h3>
                            <h4 className='newIntroductionItem'>{pizza.name}</h4>
                            <p>{pizza.description}</p>
                            <Button link='/pizzas' customClass='buttonPrimary newButton'>Check it out!</Button>
                        </div>
                        <div className='newPizza'>
                            <img src={require('../../images/' + pizza.img)} className='newPizzaImage' alt={pizza.name}/>
                        </div>
                    </div>
                    :
                    ''
                })
                }        
            </div>
        )
    }
}