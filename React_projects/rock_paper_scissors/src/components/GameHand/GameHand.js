import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import './GameHand.css';
import Button from '../Button/Button';
import { Referee } from '../Referee/Referee';


export const GameHand = props => {
  return (
    <section className="gameHands">
        <ReactCSSTransitionGroup
          component="div"
          transitionName="spin"
          transitionEnterTimeout={3000}
          transitionLeave={false}>

          {props.yourHand}

        </ReactCSSTransitionGroup>

        <Referee referee={props.referee} />

        <ReactCSSTransitionGroup
          component="div"
          transitionName="spin"
          transitionEnterTimeout={3000}
          transitionLeave={false}>

          {props.computerHand}

        </ReactCSSTransitionGroup>
    </section>
  );
}

GameHand.propTypes = {
  computerHand: PropTypes.string.isRequired,
  yourHand: PropTypes.string.isRequired,
  referee: PropTypes.string.isRequired,
}
