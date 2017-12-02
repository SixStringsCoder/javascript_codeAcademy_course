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
      referee: "",
    }
    this.theChoice = this.theChoice.bind(this);
    this.setYourScore = this.setYourScore.bind(this);
    this.setCompScore = this.setCompScore.bind(this);
    this.refereeCall = this.refereeCall.bind(this);
    this.whoWins = this.whoWins.bind(this);
    this.resetScoreBoard = this.resetScoreBoard.bind(this);
  }

  // Choose an answer
  theChoice(choice) {
    const handChoices = [
      <img alt="rock" className="gameHandsImage" src={require("../GameHand/images/rock.jpg")} />,
      <img alt="paper" className="gameHandsImage" src={require("../GameHand/images/paper.jpg")} />,
      <img alt="scissors" className="gameHandsImage" src={require("../GameHand/images/scissors.jpg")} />
    ];

    const handNames = ["rock", "paper", "scissors"];

    // The Player picks a hand using the buttons (handChoices index position provided by onClick events)
    const yourChoice = handChoices[choice];
    const yourNumber = choice;
    console.log(`You chose ${choice} which is ${handNames[yourNumber]}`);

    // Computer's choice comes from random number between 0 and 2 which correspond to index positions for handChoices array
    const randomPick = Math.floor(Math.random() * 3);
    const compChoice = handChoices[randomPick];
    const compNumber = randomPick;
    console.log(`The computer chose ${randomPick} which is ${handNames[compNumber]}`);

      this.setState({
        yourHand: yourChoice,
        compHand: compChoice
      });

    this.whoWins(yourNumber, compNumber);
  }

  setYourScore() {
    this.setState({
      yourScore: this.state.yourScore + 1,
    });
    console.log(`You win that round! You: ${this.state.yourScore} Compcrusher: ${this.state.compScore}`);
  }

  setCompScore() {
    this.setState({
      compScore: this.state.compScore + 1,
    });
    console.log(`Comp wins that round! You: ${this.state.yourScore} Compcrusher: ${this.state.compScore}`);
  }

  resetScoreBoard() {
    // After a match winner, reset page
    window.location.reload(true);
    // reset scoreboard
    this.setState({
      yourScore: 0,
      compScore: 0
    });
  }



  // These are the short phrases populating center screen between plays to indicate a tie or who won
  refereeCall(callOut) {
    const refCall = [
      "Tie!",
      "You got that one!",
      "Compcrusher got that one!",
      "Game over! You win!",
      "Game over! Compcrusher wins!"
    ];
    console.log(`${callOut} returns ${refCall[callOut]}`);
    this.setState({
      referee: refCall[callOut]
    });
  }

  whoWins(yourChoice, compChoice) {
    // yourChoice and compChoice return numbers 0 to 2
    // It's a tie
    if (yourChoice === compChoice) {
      this.refereeCall(0);
      console.log(`Tie! You: ${this.state.yourScore} Compcrusher: ${this.state.compScore}`);
      // You win that round
    } else if (yourChoice === 0 && compChoice === 2 ||
    yourChoice === 1 && compChoice === 0 ||
    yourChoice === 2 && compChoice === 1){
      // You get a point
      this.setYourScore();
      this.refereeCall(1);
    } else {
      // Computer wins that round and gets a point
      this.setCompScore();
      this.refereeCall(2);
    }
    // Conditions to win the game
    if (this.state.yourScore === 3) {
      this.refereeCall(3);
      setTimeout(this.resetScoreBoard().bind(this), 3000);
      return false;
    } else if (this.state.compScore === 3) {
      this.refereeCall(4);
      setTimeout(this.resetScoreBoard().bind(this), 3000);
    } else {
      return false;
    }
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
            referee={this.state.referee}
            />
      </section>
    );
  }
}

export default App;
