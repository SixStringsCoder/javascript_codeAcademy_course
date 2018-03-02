import React, { Component } from 'react';
import './Worldnews.css';

class Worldnews extends Component {
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
        <h2>News</h2>
        <button onClick={this.clickEventHandler} id="washPost" type="button">Washington Post</button>
        <button onClick={this.clickEventHandler} id="viceNews" type="button">Vice</button>
        <button onClick={this.clickEventHandler} id="politicoNews" type="button">Politico</button>
      </div>
    );
  }
}

export default Worldnews;
