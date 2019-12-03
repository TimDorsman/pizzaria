import React, { Component } from 'react';
import Pizza from './components/pizza/pizza';
import { store } from './mockData';
import './sass/Pizza.scss';
class Pizzas extends Component {
	render() {
		return (
			<div className="pizzaContainer">
				<Pizza data={store} refs="child" />
			</div>
		);
	}
}

export default Pizzas;
