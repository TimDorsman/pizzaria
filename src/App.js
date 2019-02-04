import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/header'
import RouteURL from './components/route/route'
import Footer from './components/footer/footer'
import './App.css';

//Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
	constructor() {
		super();

		this.state = {
			input: null,
		}
        this.changeInput = this.changeInput.bind(this)
	}

	changeInput() {
		this.setState = {
			state: null
		}
	}

	render() {
		return (
		<Router>
			<div className="App">
				<Header/>
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
