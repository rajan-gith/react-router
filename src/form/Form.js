import React, { Component} from 'react';
import './Form.css'
class Form extends Component{

	constructor(props){
		super(props);
		this.state = { 
			fullname: "",
			email: "",
			mobile: ""
		}
	}

handlename = (event) => {
	this.setState( {fullname: event.target.value });
}
handleemail = (event) => {
	this.setState( {email: event.target.value });
}

handlenumber = (event) => {
	this.setState( {mobile: event.target.value });
}

handlesubmit = (event) => {
	alert(JSON.stringify(this.state));
	event.preventDefault();
}

	render () {
		return (
			<div className="flex">
				<form onSubmit = {this.handlesubmit}>
					<label> Full Name </label><br/>
					<input type="text" value={this.state.fullname}
					onChange={this.handlename}/>
					<br/>
					<br/>
					<label> Email </label><br/>
					<input type="email" value={this.state.email}
					onChange={this.handleemail}/>
					<br/>
					<br/>
					<label> Mobile </label><br/>
					<input type="number" value={this.state.mobile}
					onChange={this.handlenumber}/>
					<br/>
					<br/>
					<label> Message </label><br/>
					<textarea />
					<br/>
					<br/>
					<input type="submit" value="send"/>
				</form>
			</div>
			)
	}
}

export default Form;