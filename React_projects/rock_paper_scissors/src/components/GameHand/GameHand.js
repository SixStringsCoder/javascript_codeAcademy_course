import React from 'react';
import PropTypes from 'prop-types';
import './GameHand.css';
import Button from '../Button/Button';
import { Referee } from '../Referee/Referee';


export const GameHand = props => {
  return (
    <section className="gameHands">
        <div>
          <img className="gameHandsImage" src={props.yourHand} />
        </div>

        <Referee referee={props.referee} />

        <div>
          <img className="gameHandsImage" src={props.computerHand} />
        </div>
    </section>
  );
}

GameHand.propTypes = {
  computerHand: PropTypes.string.isRequired,
  yourHand: PropTypes.string.isRequired,
  referee: PropTypes.string.isRequired,
}
