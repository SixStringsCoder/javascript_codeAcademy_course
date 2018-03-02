import React, { Component } from 'react';
import './Newsstand.css';
import Technology from '../Technology/Technology';
import Worldnews from '../Worldnews/Worldnews';

class Newsstand extends Component {
  render() {
    return (
        <form>
          <Technology getId={this.props.getId} />
          <Worldnews getId={this.props.getId} />
        </form>
    );
  }
}

export default Newsstand;
