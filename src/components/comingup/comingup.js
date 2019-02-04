import React, { Component } from 'react';
import Title from '../../components/title/title';
import Slider from "react-slick";

import $ from 'jquery';

import './comingup.scss';

export default class ComingUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comingup: this.props.data,
        }
    }
    fadeSlider() {
        $('.slideShowImage').fadeOut(1000, () => {this.hide()})
    }
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000
          }
        return (
            <div className='slideShowContainer'>
                {this.fadeSlider()}
                <Title title='Coming up:' className='slideTitle'>Coming up:</Title>
                <div className='slideShow'>
                    <Slider {...settings}>                
                        {this.state.comingup.map((item, i) => {
                        return  <div className='slideShowItem' key={i}>
                                    <h1 className='slideName'>{item.name}</h1>
                                    <img src={require('../../images/' + item.url)} key={i} className='slideShowImage' alt='img'/>
                                </div>
                        })}
                    </Slider>
                </div>
            </div>
        )
    }
}