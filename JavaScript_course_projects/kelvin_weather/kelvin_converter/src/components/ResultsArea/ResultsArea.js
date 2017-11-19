import React from 'react';
import './ResultsArea.css';

/*
The purpose of the <ResultsArea /> component is to represent how the temperatures
will display along with a background picture.
*/

class ResultsArea extends React.Component {
  constructor(props) {
    super(props);

    this.showTempSentence = this.showTempSentence.bind(this);

  }

  showTempSentence() {
    this.props.show(this.props.fahrDegrees, this.props.celsDegrees);
  }



  render() {
    return (
      <section className="ResultsArea" id="results">
        <h3 answer={this.props.answer}></h3>
        <p activity={this.props.activity}></p>
        <img className="image-container" src="./images/cactusJuggling_Desktop.jpg" />
      </section>
    );
  }
}


export default ResultsArea;
