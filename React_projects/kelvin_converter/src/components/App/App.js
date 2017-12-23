import React from 'react';
import './App.css';
import TemperatureBar from '../TemperatureBar/TemperatureBar';
import { ResultsArea } from '../ResultsArea/ResultsArea';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fahrenheit: null,
      celsius: null,
      answer: "",
      activity: "",
      picture: ""
    }
    this.convertTemp = this.convertTemp.bind(this);
  }

  // convertTemp returns F and C temps which then builds the total response
  convertTemp(kelvin) {
    // Celsius is 273 degrees less than Kelvin
    const c = this.celsius = kelvin - 273;
    // Solve for Fahrenheit based on Celsius; round down with Math library
    const f = this.fahrenheit = Math.floor(c * (9/5) + 32);
    // Make the answer based on temperatures
    this.answer = `The temperature is ${f}F or ${c}C.`;
    // Alert if text input is empty and button is clicked
    if (kelvin === 'undefined' || kelvin === null) {
        alert("I pity the fool who just clicks the button. Enter a number!");
        return false;
    }
    // Set the activity and corresponding pic based on temperatures
    if (f < 50) {
      this.activity = "Prepare for Antartic Winter olympics!";
      this.picture = <img alt="Antarctica" src={require('../ResultsArea/images/Antarctica_Olympics_desktop.jpg')} />;
    } else if (f < 90) {
      this.activity = "Time to go kayaking on the Willamette!";
      this.picture = <img alt="Willamette" src={require('../ResultsArea/images/Willamette_Olympics_desktop.jpg')} />;
    } else if (f < 110) {
      this.activity = "Prepare for Las Vegan Summer Olympics Cactus Juggling Event!";
      this.picture = <img alt="Cactus Juggling" src={require('../ResultsArea/images/cactusJuggling_Desktop.jpg')} />;
    } else {
      this.activity = "Prepare for Saudi Arabian Summer Olympics Dirtboarding Event!";
      this.picture = <img alt="Dirtboarding" src={require('../ResultsArea/images/Arabian_Olympics_desktop.jpg')} />;
    }
    // set state for these properties
    this.setState({
      celsius: this.celsius,
      fahrenheit: this.fahrenheit,
      answer: this.answer,
      activity: this.activity,
      picture: this.picture
    });
  }

// Pass states to other components
// TemperatureBar needs to receive convertTemp method for onClick set up there
// ResultsArea needs to receive states to set up props in its render area
  render() {
    return (
      <div className="App">
        <header className="NavBar">
          <h1>Kelvin Konverter</h1>
        </header>
          <TemperatureBar convert={this.convertTemp} />
          <ResultsArea
            fahrDegrees={this.state.fahrenheit}
            celsDegrees={this.state.celsius}
            answer={this.state.answer}
            activity={this.state.activity}
            pic={this.state.picture}
          />
      </div>
    );
  }
}

export default App;
