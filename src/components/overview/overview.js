import React, { Component } from 'react';
import Slider from "react-slick";
import '../../general/main.scss';
import './overview.scss';

export default class Overview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            food: this.props.name
        }
        this.displayFood = this.displayFood.bind(this)
    }

    displayFood() {
        const URL = `https://api.unsplash.com/search/photos/?client_id=3b9b253971ffccabe5215890b9290c58ab737902d8cd2d6b3da760992483d6a7&query=${this.state.food}&per_page=10`
        fetch(URL)
        .then(response => {
            return response.json()
        })
        .then(myjson => {
            const imagesArr = [];
            myjson.results.forEach(image => {
                imagesArr.push(image.urls.full);
            })
            this.setState(state => ({
                images: imagesArr
            })) 
        })
    }
    
    render() {
        return (
            <div className="overview">
                <Slider>
                {this.state.images.map((image, i) => {
                    return <img src={image} alt="" key={i} className="overview__image"/>
                })}
                </Slider>
                <button onClick={this.displayFood}>Click</button>
            </div>
        )
    }
}