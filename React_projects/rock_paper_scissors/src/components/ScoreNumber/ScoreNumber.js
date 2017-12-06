import React from 'react';
import PropTypes from 'prop-types';
import './ScoreNumber.css';

export const ScoreNumber = props => {
    return (
      <div className="scoreBoard">
      <p className="playerScore">{props.yourScore}</p>
      <p className="playerScore">{props.compScore}</p>
      </div>
    );
  }

ScoreNumber.propTypes = {
  yourScore: PropTypes.string.isRequired,
  compScore: PropTypes.string.isRequired
}
