import React, { Component } from 'react'
import '../Home.css';
import { Link } from 'react-router-dom';
import  contact from './images/website-phone-email-icon.png'

export default class Home extends Component {
	render() {
		let about = this.props.info
		const find = about.find(about => about.name === 'About')
		const result = about.find(detail => detail.name === 'Contact Me');
		return (
			<div className ="container">
			<div className="row about">
					<div className="col-sm-5">
			<h3 className="display-4 text-center pl-10">
						About Me
			</h3>
			<div className="profile justify-content-center mt-5">
			<div className="col-li col-lg ">
			<div className="DogDetails-card card">
					<img className="card-img-top profileImage justify-content-center" src={find.image} alt="home"/>
			<div className="card-body">
					<p>{find.content}</p>
		 </div>
					</div>
				</div>
			</div>
			</div>
				</div>
				<br/>
				<hr className="line" />
				<div className ="rows justify-content-center ">
					<h3 className="heading">Need a website reach out to me</h3>
				    <div className="image-link contact"><Link to={`/portfolio/${result.name}`}> <img className="profileImage hoverImage" src={contact} alt="contact"/> </Link></div>
				</div>
			</div>
		)
	}
}
