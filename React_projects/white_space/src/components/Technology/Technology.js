import React, { Component } from 'react';
import './Technology.css';

class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news_id: ''
    }
    this.clickEventHandler = this.clickEventHandler.bind(this);
  }


  clickEventHandler(event) {
    event.preventDefault();
    let newsID = event.target.id;

    this.setState({
      news_id: newsID
    });

    this.props.getId(this.state.news_id);
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
