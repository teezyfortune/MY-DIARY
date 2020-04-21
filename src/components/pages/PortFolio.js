import React, { Component } from 'react'

export default class PortFolio extends Component {
	render() {
		let { portfolio } = this.props;
		console.log('>>>>portfolio', portfolio)
		//  const data = portfolio.map(res => res)
		return (
			<div className="container justify-content-center">
				<h3 className="display-2 text-center">My {portfolio.name}</h3>
				<div className="col-md-5 justify-content-center" >
					<p><span> {portfolio.github}</span></p>
				</div>
				<div className="col-md-5 justify-content-lg-center">
				<p><span> {portfolio.live}</span></p>
			</div>
			</div>
		)
	}
}
