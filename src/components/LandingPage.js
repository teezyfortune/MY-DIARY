import React, { Component } from 'react';
import './LandingPage.css';

export default class LandingPage extends Component {
	render() {
		let { message } = this.props
		return (
			<div className="container background ">
				<div className="row  justify-content-center">
					{message.map(msg =>
					<div className="row md-5 justify-content-center">	<h3 className="display-4  text-center ">{msg.fact}</h3></div>
					)}
				</div>
				
			</div>
	
			
		)
	}
}
