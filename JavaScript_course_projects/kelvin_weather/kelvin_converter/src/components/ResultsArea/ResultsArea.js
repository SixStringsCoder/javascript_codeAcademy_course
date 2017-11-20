import React from 'react';
import './ResultsArea.css';

/*
<ResultsArea /> component accepts properties for
the temperature answer, activity sentence and
a corresponding background picture.
*/

class ResultsArea extends React.Component {

  render() {
    return (
      <section className="ResultsArea">
        <h3>{this.props.answer}</h3>
        <p id="results">{this.props.activity}</p>
        <div>{this.props.pic}</div>
      </section>
    );
  }
}


export default ResultsArea;
