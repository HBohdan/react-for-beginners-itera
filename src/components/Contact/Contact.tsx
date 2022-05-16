import { PureComponent } from 'react';

type ContactProps = {
  contact: string;
}

class Contact extends PureComponent<ContactProps> {

  render() {
    return (
      <p>{this.props.contact}</p>
    );
  }
}

export default Contact;