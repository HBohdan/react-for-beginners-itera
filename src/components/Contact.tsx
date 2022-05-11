import { Component } from 'react';

type ContactProps = {
  contact: string;
}

class Contact extends Component<ContactProps> {

  render() {
    return (
      <p>{this.props.contact}</p>
    );
  }
}

export default Contact;