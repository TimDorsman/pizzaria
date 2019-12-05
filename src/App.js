import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/header'
import RouteURL from './components/route/route'
import Footer from './components/footer/footer'
import CartList from './components/cartlist/cartlist'
import './css/App.css';

//Library
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faShoppingCart, faTimes)

class App extends Component {
	constructor() {
		super();
		this.state = {
			showCart: false
		}
	}

	showCart = (status) => {
		this.setState({
			showCart: status
		})
	}

	render() {
		return (
			<Router>
				<div className='App'>
					<div className="cartListOverlay"></div>
					<Header />
					<CartList data={localStorage.getItem('list')} refs="child" showCart={this.showCart}/>
					<div className='content'>
						<RouteURL />
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
