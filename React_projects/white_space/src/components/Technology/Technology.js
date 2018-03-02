import React, { Component } from 'react';
import './Technology.css';

class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.clickEventHandler = this.clickEventHandler.bind(this);
  }

  clickEventHandler(event) {
    event.preventDefault();
    this.props.getId(event.target.id);
  }

  render() {
    return (
      <div>
        <h2>Technology</h2>
        <button onClick={this.clickEventHandler} id="engadget" type="button">Engadget</button>
        <button onClick={this.clickEventHandler} id="recode" type="button">Recode</button>
        <button onClick={this.clickEventHandler} id="nextWeb" type="button">The Next Web</button>
      </div>
    );
  }
}

export default Technology;
