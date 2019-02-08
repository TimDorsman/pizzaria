import React, { Component } from 'react';
import Introduction from './components/introduction/introduction';
import Footer from './components/footer/footer'
import './App.css';

class About extends Component {
	render() {
		return (
			<div className="App">
				<div className="content">
					<Introduction name="Tim" age="20" city="Zoetermeer"/>
				</div>
			</div>
		);
	}
}

export default About;
