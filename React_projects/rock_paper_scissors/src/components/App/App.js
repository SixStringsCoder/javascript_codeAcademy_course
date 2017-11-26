import React, { Component } from 'react';
import './App.css';
// import ScoreBar from '../ScoreBar/ScoreBar';
import GameArea from '../GameArea/GameArea';
// import ButtonBar from '../ButtonBar/ButtonBar';


class App extends Component {
  render() {
    return (
      <section id="screen">

        <header className="NavBar">
          <h1>R P S</h1>
        </header>

        <GameArea />

      </section>
    );
  }
}

export default App;
