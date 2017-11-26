import React from 'react';
import './GameArea.css';
import ScoreBar from '../ScoreBar/ScoreBar';
import GameHand from '../GameHand/GameHand';
import ButtonBar from '../ButtonBar/ButtonBar';

class GameArea extends React.Component {
  render() {
    return (
      <section className="GameArea">
          <ScoreBar />
          <GameHand />
          <ButtonBar />
      </section>
    );
  }
}

export default GameArea;
