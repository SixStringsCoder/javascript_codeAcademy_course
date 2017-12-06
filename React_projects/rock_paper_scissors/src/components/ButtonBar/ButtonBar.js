import React from 'react';
import PropTypes from 'prop-types';
import './ButtonBar.css';
import Button from '../Button/Button';

// 3 buttons to pick RPS and play again button
export const ButtonBar = props => {
  return (
      <Button theChoice={props.theChoice}
              playAgain={props.playAgain}
              />
  );
}

ButtonBar.propTypes = {
  theChoice: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired
}
