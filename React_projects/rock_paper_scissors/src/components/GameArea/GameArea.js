import React from 'react';
import PropTypes from 'prop-types';
import './GameArea.css';
import { ScoreBar } from '../ScoreBar/ScoreBar';
import { ScoreNumber } from '../ScoreNumber/ScoreNumber';
import { GameHand } from '../GameHand/GameHand';
import { ButtonBar } from '../ButtonBar/ButtonBar';

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

GameArea.propTypes = {
  computerScore: PropTypes.number.isRequired,
  yourScore: PropTypes.number.isRequired,
  theChoice: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired,
  computerHand: PropTypes.string.isRequired,
  yourHand: PropTypes.string.isRequired,
  referee: PropTypes.string.isRequired,
}

export default GameArea;
