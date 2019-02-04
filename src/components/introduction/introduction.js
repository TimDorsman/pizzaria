import React, { Component } from 'react';
import './introduction.scss';
import '../../general/main.scss';
import Button from '../button/button'

export default class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopname: 'Drip',
            name: this.props.name,
            age: this.props.age,
            city: this.props.city,
            food: 'Spaghetti',
            showFood: false,
            image: null
        }
        this.displayFood = this.displayFood.bind(this)
    }

    displayFood() {
        this.setState(state => ({
            showFood: !state.showFood
        }));
        const URL = `https://api.unsplash.com/search/photos/?client_id=3b9b253971ffccabe5215890b9290c58ab737902d8cd2d6b3da760992483d6a7&query=${this.state.food}`
        fetch(URL)
        .then(response => {
            return response.json()
        })
        .then(myjson => {
            let random = Math.floor(Math.random() * (myjson.results.length - 0) + 0 );
            this.setState(state => ({
                image: myjson.results[random].urls.full
            }))
        })
    }

    render() {
        return (
            <div className="introduction">
                <h2 className="introductionHeader">My name is {this.state.name}</h2>
                <p>I created {this.state.shopname} in 2019 as a fun project but it evolved itself into a worldwide clothing outlet.
                As an {this.state.age} year old this drastically changed my life for the better. I currently live in {this.state.city}, born and raised.
                My plans in the future are becoming rich. Thats it. Don't need anything else, just money.</p>
                <Button className="introductionButton" onClick={this.displayFood}>Click here to see my favourite food</Button>
                {this.state.showFood ? <p>{this.state.food}</p> : ''}
                {this.state.showFood ? <img src={this.state.image} className="introductionImage " width="auto" height="250" alt={this.state.food}/> : ''}
            </div>
        )
    }
}