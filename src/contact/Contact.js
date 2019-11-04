import React from 'react';
import './Contact.css';
import Form from './../form/Form';

const Contact = (argument) => {
	return (
		<div className="contact-container">
			<h2 className="flex">Welcome to Contact us page.</h2>
			<br/>
			<Form/>
		</div>
	)
}

export default Contact;