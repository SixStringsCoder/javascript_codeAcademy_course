import React from 'react';
import './App.css';
import TemperatureBar from '../TemperatureBar/TemperatureBar';
import ResultsArea from '../ResultsArea/ResultsArea';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.convertTemp = this.convertTemp.bind(this);
    this.createAnswer = this.createAnswer.bind(this);
  }

  // Temp Converter with concise method
  convertTemp(kelvin) {
    // Celsius is 273 degrees less than Kelvin
    const celsius = kelvin - 273;
    // Solve for Fahrenheit based on Celsius; round down with Math library
    const fahrenheit = Math.floor(celsius * (9/5) + 32);
    // Make the answer based on temperatures
    this.createAnswer(celsius, fahrenheit);
  }

  // Create answer with concise method
  createAnswer(c, f) {
    // logging temp. in F using JS string interpolation
    let answer = `The temperture is ${f}F or ${c}C.`;
    let activity;
    // follow up statements based on
    if (f < 50) {
      activity = "Prepare for Antartic Winter olympics!";
    } else if (f > 50 && f < 90) {
      activity = "Time to go kayaking on the Willamette!";
    } else if (f > 90 && f < 110) {
      activity = "Prepare for Las Vegan Summer Olympics Cactus Juggling Event!";
    } else {
      activity = "Prepare for Saudi Arabian Summer Olympics marathon!";
    }
  }

  render() {
    return (
      <div className="App">
        <header class="NavBar">
          <h1>Kelvin Konverter</h1>
        </header>
          <TemperatureBar convert={this.convertTemp} />
          <ResultsArea show={this.createAnswer} />
      </div>
    );
  }
}

export default App;
