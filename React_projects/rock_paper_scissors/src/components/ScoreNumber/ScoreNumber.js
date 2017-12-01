import React from 'react';
import './ScoreNumber.css';

class ScoreNumber extends React.Component {
  render() {
    return (
      <div className="scoreBoard">
      <p className="playerScore">{this.props.yourScore}</p>
      <p className="playerScore">{this.props.compScore}</p>
      </div>
    );
  }
}

export default ScoreNumber;
