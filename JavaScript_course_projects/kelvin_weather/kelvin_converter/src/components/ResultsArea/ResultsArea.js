import React from 'react';
import ReactDOM from 'react-dom';
import './ResultsArea.css';

/*
The purpose of the <ConversionActivity /> component is to represent how the temperatures
will display along with a background picture.
*/

class ResultsArea extends React.Component {
  render() {
    return (

      <section className="ResultsArea">
        <h3>The temperture is 98F or 26C.</h3>
        <p>Prepare for Las Vegan Summer Olympics Cactus Juggling Event!</p>
        <img className="image-container" src="./images/cactusJuggling_Desktop.jpg" />
      </section>

    );
  }
}


export default ResultsArea;
