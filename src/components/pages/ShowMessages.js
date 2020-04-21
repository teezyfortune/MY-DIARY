import React, { Component } from 'react'

export default class ShowMessages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			message: this.props.msg.message
		};
		this.handleUpdate = this.handleUpdate.bind(this);
		// this.handleRemove = this.handleRemove.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggleBtn = this.toggleBtn.bind(this)
	}

	toggleBtn() {
		this.setState({
			isEditing: !this.state.isEditing
		})
	}
	handleUpdate(evt) {
		evt.preventDefault();
		this.props.update(this.props.id, this.state.message);
		this.setState({isEditing: false});
	}
	
	
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	render() {
		const msg = this.props.msg
		let result;
    if (this.state.isEditing) { 
      result =
        <div>
          <form onSubmit={this.handleUpdate}>
          <input type="text" onChange={this.handleChange} value={this.state.message} name='message' />
        <button>save</button>
      </form>
        </div>
    } else {
      result = (
				<div className="container mt-4"> 
				<div className="col-md-5 justify-content-center display-block">
				<span>MessageBy:</span>
				<div>	<p>{msg.email} </p></div>	
						<span>Message:</span><br/>	<p> {msg.message}</p>
					</div>
					<button onClick={this.toggleBtn}>Edit</button>
					<button onClick = {this.handleRemove}>X</button>
	
					</div>
      )
    }
		return result
	
	}
} 
                                                                                             