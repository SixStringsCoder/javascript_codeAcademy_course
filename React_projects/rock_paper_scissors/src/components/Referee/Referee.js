import React from 'react';
import './Referee.css';
import Button from '../Button/Button';
import GameHand from '../GameHand/GameHand';

class Referee extends React.Component {
  render() {
    return (
      <div className="referee">
        <h3>{this.props.referee}</h3>
      </div>
    );
  }
}

export default Referee;
