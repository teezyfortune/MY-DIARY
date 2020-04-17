import React, { Component } from 'react'
import ContactForm from '../pages/ContactForm';
import ShowMessage from '../pages/ShowMessages';
import '../pages/contact.css';
export default class Action extends Component {
	constructor(props) {
		super(props)
		this.state = { messages: [] }
		this.sendMessage = this.sendMessage.bind(this);
		this.updateMessage = this.setState.bind(this);
	}

	sendMessage(newMessgae){
		this.setState({
			messages: [...this.state.messages, newMessgae]
		})
	}
	
	updateMessage(updateMessage) {
		const messages = this.state.messages.amap(msg => {
			if (msg.message === updateMessage) {
				return {...msg, message: updateMessage}
			}
			return msg
		})
		this.setState({
			messages: messages
		})
	}

	deleteMessage() {
		 
	 }

	render() {
		const message = this.state.messages.map(msg => {
		return 	<ShowMessage message={msg} key={msg} />
		})
		return (
			<div className="center-conter">
				<ContactForm messages={message} create={this.sendMessage} />
				{message}

			</div>
		)
	}
}
