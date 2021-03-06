import React, { Component } from 'react'
import ContactForm from '../pages/ContactForm';
import ShowMessage from '../pages/ShowMessages';
import '../pages/contact.css';

export default class Action extends Component {
	constructor(props) {
		super(props)
		this.state = { messages: [] }
		this.sendMessage = this.sendMessage.bind(this);
		this.updateMessage = this.updateMessage.bind(this);
		this.deleteMessage =this.deleteMessage.bind(this)
	}

	sendMessage(newMessgae){
		this.setState({
			messages: [...this.state.messages, newMessgae]
		})
	}
	
	updateMessage(id, updateMessage) {
		const messages = this.state.messages.map(d => {
			if (d.id === id) {
				return {...d, message: updateMessage}
			}
			return d
		})
		this.setState({
			messages: messages
		})
	}

	deleteMessage(id) {
		this.setState({
			 messages: this.state.messages.filter(res => res.id !== id)
		})
	 }
	render() {
		const message = this.state.messages.map(msg => {
		return 	<ShowMessage msg={msg} key={msg.id} id={msg.id} update={this.updateMessage} remove={this.deleteMessage} />
		})
		return (
			<div className="center-conter">
				<ContactForm messages={message} create={this.sendMessage} />
				{message}
			</div>
		)
	}
};


