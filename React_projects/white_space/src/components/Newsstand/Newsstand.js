import React, { Component } from 'react';
import './Newsstand.css';
import Technology from '../Technology/Technology';
import News from '../News/News';

class Newsstand extends Component {
  render() {
    return (
        <form>
          <Technology getId={this.props.getId} />
          <News getId={this.props.getId} />
        </form>
    );
  }
}

export default Newsstand;
