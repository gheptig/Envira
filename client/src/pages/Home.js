import React, { Component } from 'react';
import '../App.css';
import EnviraBot from '../components/EnviraBot';
import Carousel from '../components/HomeCarousel';
import Footer from '../components/Footer'
import Polly from '../components/Polly';
import Axios from 'axios';

export default class Home extends Component {
	render() {
		return (
			<div className="wrapper">
				<Carousel />
				<EnviraBot />
				{/* <Footer color={"red"}/> */}
			</div>
		);
	}
}
