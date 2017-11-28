import React from 'react';
import './GameHand.css';
import Button from '../Button/Button';

class GameHand extends React.Component {



  render() {
    return (

      <section className="gameHands">
          <div>{this.props.yourHand}</div>
          <div>{this.props.computerHand}</div>
      </section>

    );
  }
}

export default GameHand;
