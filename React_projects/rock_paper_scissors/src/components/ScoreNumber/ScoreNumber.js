import React from 'react';
import './ScoreNumber.css';

class ScoreNumber extends React.Component {
  render() {
    return (
      <div className="scoreBoard">
      <p className="playerScore">{this.props.yScore}</p>
      <p className="playerScore">{this.props.cScore}</p>
      </div>
    );
  }
}

export default ScoreNumber;
