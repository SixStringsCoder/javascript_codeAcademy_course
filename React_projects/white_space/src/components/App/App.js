import React, { Component } from 'react';
import './App.css';

const spacer = '&nbsp;'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <header>
        <img src={require("./images/newspaper-976110_1280.png")} alt="newspaper icon"/>
        </header>

        <h1>| | White | | Space | |</h1>
        <h2 id="subtitle">...the margins hold the secrets...</h2>
        <form>
          <h2>Technology</h2>
          <button id="engadget" type="button">Engadget</button>
          <button id="recode" type="button">Recode</button>
          <button id="nextWeb" type="button">The Next Web</button>
          <h2>News</h2>
          <button id="washPost" type="button">Washington Post</button>
          <button id="viceNews" type="button">Vice</button>
          <button id="politicoNews" type="button">Politico</button>
        </form>

        <main>

        </main>
      </div>
    );
  }
}

export default App;
