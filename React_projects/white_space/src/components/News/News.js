import React, { Component } from 'react';
import './News.css';

class News extends Component {
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
        <h2>News</h2>
        <button onClick={this.clickEventHandler} id="washPost" type="button">Washington Post</button>
        <button onClick={this.clickEventHandler} id="viceNews" type="button">Vice</button>
        <button onClick={this.clickEventHandler} id="politicoNews" type="button">Politico</button>
      </div>
    );
  }
}

export default News;
