import React, { Component } from 'react';
import Introduction from './components/introduction/introduction';
import './css/App.css';

class About extends Component {
	render() {
		return (
			<Introduction name="Tim" age="20" city="Zoetermeer" />
		);
	}
}

export default About;
