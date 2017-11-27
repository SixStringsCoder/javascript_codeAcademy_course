import React, { Component } from 'react';
import './App.css';
import GameArea from '../GameArea/GameArea';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourScore: 0,
      compScore: 0,
      gameHand: [],
    }
  }

  // // Choose computer's answer
  // const computerChoice = () => {
  //   // Pick random number between 0 and 2
  //   const choice = Math.floor(Math.random() * 3);
  //   // Return number to access handChoice array elements with graphics' links
  //   return choice;
  // }
  //
  // // Choose your answer
  // const yourChoice = (choice) => {
  //   // Choice equals 0, 1 or 2 which accesses index of an array to pick hand graphic
  //     return handChoice[choice];
  // }

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
