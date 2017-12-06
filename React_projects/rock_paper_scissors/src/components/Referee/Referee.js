import React from 'react';
import PropTypes from 'prop-types';
import './Referee.css';

// Callouts to say who wins or Tie
export const Referee = props => {
    return (
      <div className="referee">
        <h3>{props.referee}</h3>
      </div>
    );
  }

Referee.propTypes = {
  referee: PropTypes.string.isRequired
}
