import React from 'react';
import './GameArea.css';
import ScoreBar from '../ScoreBar/ScoreBar';
import ScoreNumber from '../ScoreNumber/ScoreNumber';
import GameHand from '../GameHand/GameHand';
import ButtonBar from '../ButtonBar/ButtonBar';

class GameArea extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   compChoice = 0;
    //   yourChoice = 0;
    // }
  }


  render() {
    return (
      <section className="GameArea">
          <ScoreBar />

          <ScoreNumber cScore={this.props.computerScore}
                    yScore={this.props.yourScore}
                    />

          <GameHand theChoice={this.props.theChoice}
                    computerHand={this.props.computerHand}
                    yourHand={this.props.yourHand}
                    />

          <ButtonBar theChoice={this.props.theChoice} />
      </section>
    );
  }
}

export default GameArea;
