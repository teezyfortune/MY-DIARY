import React, { Component } from 'react'
import './About.css';

export default class About extends Component {
	render() {
		let { about } = this.props;
		return (
				<div className="row about-x">
					<div className="col-sm-5">
					<h3 className="display-3 text-center pl-10">
						About Me
					</h3>
					<div className="mobile-screen">
					<div className="col-li col-lg">
					<div className="DogDetails-card card">
					<img className="card-img-top profileImage justify-content-center " src={about.image} alt={about.image}/>
					<div className="card-body">
							<p className="text-size">{about.content}</p>
				 </div>
							</div>
						</div>
					</div>
					</div>
					</div>
		)
	}
}
