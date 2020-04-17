import React, { Component } from 'react'

export default class ShowMessages extends Component {
	render() {
		const msg = this.props.message
		console.log('>>>>>mdmdmd>', msg)

		return (
			<div className="container mt-4"> 
			<div className="col-md-5 justify-content-center display-block">
			<span>MessageBy:</span>
			<div>	<p>{msg.email} </p></div>	
					<span>Message:</span>	<p> {msg.message}</p>
				</div>
				<button>Edit</button>
				<button>X</button>

				</div>
		)
	}
}
