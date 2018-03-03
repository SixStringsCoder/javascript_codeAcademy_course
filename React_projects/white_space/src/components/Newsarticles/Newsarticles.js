import React, { Component } from 'react';
import './Newsarticles.css';
import Article from '../Article/Article';

class Newsarticles extends Component {
  render() {
    return (

          this.props.articles.map((article, index) => {
            <Article article={article} key={index} />;
          })

    );
  }
}

export default Newsarticles;
