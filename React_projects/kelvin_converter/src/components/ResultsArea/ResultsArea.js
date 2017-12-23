import React from 'react';
import PropTypes from 'prop-types';
import './ResultsArea.css';

/*
ResultsArea functional component accepts properties for
the temperature answer, activity sentence and
a corresponding background picture.
*/

export const ResultsArea = (props) => {
    return (
      <section className="ResultsArea">
        <h3>{props.answer}</h3>
        <p id="results">{props.activity}</p>
        <div>{props.pic}</div>
      </section>
    );
  }

ResultsArea.propTypes = {
  answer: PropTypes.string.isRequired,
	activity: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired
}
