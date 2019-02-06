import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/header'
import RouteURL from './components/route/route'
import Footer from './components/footer/footer'
import CartList from './components/cartlist/cartlist'
import './App.css';

//Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faShoppingCart, faTimes)

class App extends Component {
	constructor() {
		super();

		this.state = {
			input: null,
			amount: 200
		}
        this.changeInput = this.changeInput.bind(this)
	}

	changeInput() {
		this.setState ({
			state: null,
			amount: 300
		})
		console.log(this.state.amount);
	}
	render() {
		return (
		<Router>
			<div className="App">
				<Header />
				<CartList data={localStorage.getItem('list')} amount={this.state.amount} refs="child"/>
				<div className="content">
					<RouteURL />
				</div>
				<Footer/>
				{/* <Script url='cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js' /> */}
			</div>
		</Router>
		);
	}
}

export default App;
