import React from 'react';

type ContactProps = {
	contact: string;
}

class Contact extends React.Component<ContactProps> {

	render() {
		return (
			<p>{this.props.contact}</p>
		);
	}
}

export default Contact;