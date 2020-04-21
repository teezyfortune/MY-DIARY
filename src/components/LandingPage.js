import React, { Component } from 'react';
import './LandingPage.css';
import uuid from 'uuid/v4';

export default class LandingPage extends Component {
	render() {
		let { message } = this.props
		return (
			<div className="container background ">
				<div className="row  justify-content-center">
				</div>
				{message.map(msg =>
					<div className="center-text " key={uuid()}>	<h3 className=" ">{msg.fact}</h3></div>
					)}
			</div>
	
			
		)
	}
}
