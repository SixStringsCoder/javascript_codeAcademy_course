import React, { Component } from 'react';
import './App.css';
import Newsstand from '../Newsstand/Newsstand';
import ApiCall from '../../utilities/main';

const spacer = '&nbsp;'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonID: '',
      articles: []
    }
    this.getNewsId = this.getNewsId.bind(this);
  }


  getNewsId(id) {
    ApiCall.getNews(id).then(articles => {
      console.log(articles)

      this.setState({
        articles: articles
      });
    });
  }



  render() {
    return (
      <div>
        <header role="banner">
          <img src={require("./images/newspaper-976110_1280.png")} alt="newspaper icon"/>
          <h1>| | White | | Space | |</h1>
          <h2 id="subtitle">...where the margins hold the secrets...</h2>
        </header>

        <Newsstand getId={this.getNewsId} />

        <main>

        </main>
      </div>
    );
  }
}

export default App;
