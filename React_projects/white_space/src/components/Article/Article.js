import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (

      <div className="articlerow">
       <article className="article">
         <h2 className="title">  {this.props.article.title}  </h2>
         <h3>By   {this.props.article.author}  </h3>
         <h4>Published: {this.props.article.pubDate}</h4>
         <p>   {this.props.article.descr}  </p>
         <a href={this.props.article.url} target="_blank" className="readmore"><p>Read More</p></a>
       </article>

       <div className="share">
         <img className="storyimage" src={this.props.article.image} />
         <a href="https://twitter.com/SixStringHanlon" target="_blank"><button type="button" className="tweet" id="tweet ' + index + '">
         <i className="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>
       </div>
     </div>

    );
  }
}

export default Article;
