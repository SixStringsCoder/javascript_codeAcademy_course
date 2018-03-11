import React, { Component } from 'react';
import './Tweet.css';

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.clickEventHandler = this.clickEventHandler.bind(this);
  }

  clickEventHandler(event) {
    event.preventDefault();
    // Twitter.postStatus(this.props.article.url);
  }

  render() {
    return (
      <div className="share">
        <img className="storyimage" src={this.props.article.image} />
        <a href="https://twitter.com/SixStringHanlon" target="_blank">
          <button onClick={this.clickEventHandler} type="button" className="tweet" id={this.props.article.url}>
        <i className="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>
      </div>
    );
  }
}

export default Tweet;
