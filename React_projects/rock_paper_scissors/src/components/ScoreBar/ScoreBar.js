import React from 'react';
import './ScoreBar.css';
import { ScoreNumber } from '../ScoreNumber/ScoreNumber';
import { PlayerName } from '../PlayerName/PlayerName';

export const ScoreBar = props => {
  return (
    <section className="scoreBar">
          <div className="playerBox">
            <PlayerName />
            <ScoreNumber />
          </div>

          <div className="playerBox">
            <h3 className="playerName">CompCrusher</h3>
            <ScoreNumber />
          </div>
    </section>
  );
}
