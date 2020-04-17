import React, { Component } from 'react'
import {Link, NavLink} from "react-router-dom"
export default class NavBar extends Component {
	render() {
	
		const navAddress = this.props.profile.map((link) => <li className="nav-item display-inline" key={link.name}>
			<NavLink exact to={`/portfolio/${link.name}`} className="nav-link" key={link.name}>{link.name}</NavLink>
		</li>
		)
		console.log('>>>>>>addree', navAddress)

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
				<Link className="navbar-brand" to="/portfolio">
					MY DIARY
     	</Link>
				<button className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"/>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
							<NavLink exact to="/portfolio" className="nav-link">Home</NavLink>
						</li>
						{navAddress}
					</ul>
					</div>
				</nav>
		)
	}
}
