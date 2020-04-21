import React, { Component } from 'react'
import uuid from 'uuid/v4';

export default class ContactForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			message: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.create({ ...this.state, id: uuid() })
		this.setState({
			email: "",
			message: ""
		})
	}
	render() {
		return (
			<div className="container justify-content-center" > 
				<div className="row-col-md">
				<h3 className="display-4 text-center"> Contact Me</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group ">
						<label for="email">Email</label>
						<input type="email"
							className="form-control"
							name="email"
								value={this.state.email}
								onChange = {this.handleChange}
						/>
					</div>
				<div class="form-group">
 					 <label for="exampleFormControlTextarea2">Message</label>
				<textarea
			class="form-control rounded-0"
							id="exampleFormControlTextarea2"
							name="message"
								value={this.state.message}
								onChange = {this.handleChange}
							rows="3">
							</textarea>
							</div>
						<button  className="btn btn-success">Send Message</button>
					</form>
				</div>
			</div>
		)
	}
}
