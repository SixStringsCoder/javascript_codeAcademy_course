import React from 'react';
import './GameHand.css';
import Button from '../Button/Button';
import Referee from '../Referee/Referee';

class GameHand extends React.Component {
  render() {
    return (

      <section className="gameHands">
          <div>{this.props.yourHand}</div>

          <Referee referee={this.props.referee}/>

          <div>{this.props.computerHand}</div>
      </section>

    );
  }
}

export default GameHand;
