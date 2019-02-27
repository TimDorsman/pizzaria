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
                <h2>El pizzarino</h2>
                <p>started in 1965 in a Rijswijk's neighbourhood.
                    Many locals would come for a delicious pizza after work or in their free time.
                    Together with partners we have expanded and got numerous awards such as 'Fastest pizzachef 1996' and 'Worldwide pizza championship 2015' worldwide.
                    Our plans for the future are enlarging the menu with chicken wings and other treats.
                </p>
                <Button class='buttonSecundary' link='/pizzas'>Check out what we sell</Button>
                {this.state.showFood ? <p>{this.state.food}</p> : ''}
                {this.state.showFood ? <img src={this.state.image} className="introductionImage " width="auto" height="250" alt={this.state.food}/> : ''}
            </div>
        )
    }
}