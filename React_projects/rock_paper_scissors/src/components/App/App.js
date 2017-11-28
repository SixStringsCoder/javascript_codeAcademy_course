import React, { Component } from 'react';
import './App.css';
import GameArea from '../GameArea/GameArea';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourScore: 0,
      compScore: 0,
      yourHand: "",
      compHand: "",
    }
    this.theChoice = this.theChoice.bind(this);
  }


  // Choose your answer
  theChoice(choice) {
    const handChoices = [
      <img alt="rock" className="gameHandsImage" src={require("../GameHand/images/rock.jpg")} />,
      <img alt="paper" className="gameHandsImage" src={require("../GameHand/images/paper.jpg")} />,
      <img alt="scissors" className="gameHandsImage" src={require("../GameHand/images/scissors.jpg")} />
    ]

    // Pick from Button onClick events
    const yourChoice = handChoices[choice];
    console.log(`You chose ${choice} which is ${handChoices[choice]}`);

    // Pick random number between 0 and 2 for computer's choice
    const randomPick = Math.floor(Math.random() * 3);
    const compChoice = handChoices[randomPick];
    console.log(`The computer chooses ${randomPick} which is ${compChoice}`);

      this.setState({
        yourHand: yourChoice,
        compHand: compChoice
      });
  }

  render() {
    return (
      <section id="screen">
        <header className="NavBar">
          <h1>R P S</h1>
        </header>
          <GameArea theChoice={this.theChoice}
          yourHand={this.state.yourHand}
          computerHand={this.state.compHand}
          yourScore={this.state.yourScore}
          computerScore={this.state.compScore}
          />
      </section>
    );
  }
}

export default App;
