import React from 'react';
import './ScoreBar.css';
import ScoreNumber from '../ScoreNumber/ScoreNumber';
import PlayerName from '../PlayerName/PlayerName';

class ScoreBar extends React.Component {
  render() {
    return (
      <section className="scoreBar">
            <div className="playerBox">
              <PlayerName />
              <ScoreNumber />
            </div>

            <div className="playerBox">
              <PlayerName />
              <ScoreNumber />
            </div>
      </section>
    );
  }
}

export default ScoreBar;
