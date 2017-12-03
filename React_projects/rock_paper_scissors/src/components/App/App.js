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
    // If You get last point,
    if (this.state.yourScore === 2) {
      // Increment score
      this.setState({
        yourScore: this.state.yourScore + 1,
      });
      // Show "Game Over" message
      this.refereeCall(4);
      // Reset window which auto resets score
      setTimeout(function(){ window.location.reload(true); }, 2500);
    } else {
      // Increment score before last point
      this.setState({
        yourScore: this.state.yourScore + 1,
      });
    }
  }

  setCompScore() {
    // If computer gets last point,
    if (this.state.compScore === 2) {
      // Increment score
      this.setState({
        compScore: this.state.compScore + 1,
      });
      // Show "Game Over" message
      this.refereeCall(5);
      // Reset window which auto resets score
      setTimeout(function(){ window.location.reload(true); }, 2500);
    } else {
      // Increment score before last point
      this.setState({
        compScore: this.state.compScore + 1,
      });
    }
  }


  // These are the short phrases populating center screen between plays to indicate a tie or who won
  refereeCall(callOut) {
    const refCall = [
      "Tie!",
      "Rock breaks scissors",
      "Paper covers rock",
      "Scissors cut paper",
      "GAME OVER! You win!",
      "GAME OVER! Compcrusher wins!"
    ];

    this.setState({
      referee: refCall[callOut]
    });
  }


  whoWins(yourChoice, compChoice) {
    // All outcomes before game ends at 3
    if (this.state.yourScore != 3 || this.state.compScore != 3) {
        if (yourChoice === 0 && compChoice === 2) {
          this.refereeCall(1);
          this.setYourScore();
        } else if (yourChoice === 1 && compChoice === 0 ) {
          this.refereeCall(2);
          this.setYourScore();
        } else if (yourChoice === 2 && compChoice === 1) {
          this.refereeCall(3);
          this.setYourScore();
        } else if (yourChoice === 2 && compChoice === 0) {
          this.refereeCall(1);
          this.setCompScore();
        } else if (yourChoice === 0 && compChoice === 1 ) {
          this.refereeCall(2);
          this.setCompScore();
        } else if (yourChoice === 1 && compChoice === 2) {
          this.refereeCall(3);
          this.setCompScore();
        } else {
          this.refereeCall(0);
        }
      };
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
