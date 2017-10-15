/*
The client doesn't like their contact page displaying their personal information for all to see.
They've asked you to hide their website's contact page behind a password form.
Steve Hanlon Oct 13, 2017
*/

import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

 // Check whether a submitted password is equal to 'swordfish'
  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    // login form
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input
          type="password"
          placeholder="Password" />
        <input type="submit" />
      </form>
      );
    // contact info is hidden since not in return statement
    const contactInfo = (
    	<ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    );
    return (
      <div id="authorization">
        // ternary operator; if authorized show contact info otherwise enter p/w
        <h1>{ this.state.authorized ? 'Contact' : 'Enter the Password' }</h1>
        { this.state.authorized ? contactInfo : login }
      </div>
    );
  }
}

// render form to DOM
ReactDOM.render(
  <Contact />,
  document.getElementById('app')
);
