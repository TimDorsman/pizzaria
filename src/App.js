import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/header'
import RouteURL from './components/route/route'
import Footer from './components/footer/footer'
import CartList from './components/cartlist/cartlist'
import './css/App.css';
import './general/main.scss';

//Library
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faShoppingCart, faTimes, faUndo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faShoppingCart, faTimes, faUndo)

class App extends Component {
	constructor() {
		super();
		this.state = {
			showCart: false
		}
	}

	showCart = (status) => {
		this.setState(state => ({
			showCart: !state.showCart
		}))

		console.log('showCart called', this.state.showCart);
	}

	render() {
		return (
			<Router>
				<div className='App'>
					<div className="cartListOverlay"></div>
					<Header showCart={this.showCart} />
					<CartList data={localStorage.getItem('list')} refs="child" status={this.state.showCart}/>
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
