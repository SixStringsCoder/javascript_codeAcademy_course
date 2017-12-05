import React from 'react';
import './GameArea.css';
import ScoreBar from '../ScoreBar/ScoreBar';
import ScoreNumber from '../ScoreNumber/ScoreNumber';
import GameHand from '../GameHand/GameHand';
// import Referee from '../Referee/Referee';
import ButtonBar from '../ButtonBar/ButtonBar';

class GameArea extends React.Component {

  render() {
    return (
      <section className="GameArea">
          <ScoreBar />

          <ScoreNumber compScore={this.props.computerScore}
                    yourScore={this.props.yourScore}
                    />

          <GameHand theChoice={this.props.theChoice}
                    computerHand={this.props.computerHand}
                    yourHand={this.props.yourHand}
                    referee={this.props.referee}
                    />

          <ButtonBar theChoice={this.props.theChoice}
                    playAgain={this.props.playAgain}
                    />
      </section>
    );
  }
}

export default GameArea;
