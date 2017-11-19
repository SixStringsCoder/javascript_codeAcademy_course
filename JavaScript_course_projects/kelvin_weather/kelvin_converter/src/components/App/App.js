import React from 'react';
import './App.css';
import TemperatureBar from '../TemperatureBar/TemperatureBar';
import ResultsArea from '../ResultsArea/ResultsArea';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fahrenheit: 0,
      celsius: 0,
      answer: "",
      activity: "",
      pic: "./images/cactusJuggling_Desktop.jpg"
    }
    this.convertTemp = this.convertTemp.bind(this);
    this.setActivity = this.setActivity.bind(this);
  }

  // Temp Converter with concise method
  convertTemp(kelvin) {
    // Celsius is 273 degrees less than Kelvin
    this.celsius = kelvin - 273;
    // Solve for Fahrenheit based on Celsius; round down with Math library
    this.fahrenheit = Math.floor(this.celsius * (9/5) + 32);
    // Make the answer based on temperatures
    // console.log(celsius, fahrenheit);
    this.setState({
      celsius: this.celsius,
      fahrenhiet: this.fahrenheit,
    });
    this.setActivity(this.celsius, this.fahrenheit);
  }

  setActivity(c, f) {
    const thingToDo = this.state.activity;
    console.log(`This is ${c}C and ${f}F in  method`);
    const answerWithTemps = `The temperture is ${f}F or ${c}C.`;

    // follow up statements based on temp.
    if (f < 50) {
      this.thingToDo = "Prepare for Antartic Winter olympics!";
    } else if (f > 50 && f < 90) {
      this.thingToDo = "Time to go kayaking on the Willamette!";
    } else if (f > 90 && f < 110) {
      this.thingToDo = "Prepare for Las Vegan Summer Olympics Cactus Juggling Event!";
    } else {
      this.thingToDo = "Prepare for Saudi Arabian Summer Olympics marathon!";
    }

    this.setState({
      activity: this.thingToDo,
      answer: answerWithTemps,
    });

  }

  showPic(picLink) {
    picLink = this.state.pic;

    this.setState({
      pic: picLink,
    });

  }


  render() {
    return (
      <div className="App">
        <header className="NavBar">
          <h1>Kelvin Konverter</h1>
        </header>
          <TemperatureBar convert={this.convertTemp} />
          <ResultsArea
            show={this.setActivity}
            fahrDegrees={this.state.fahrenheit}
            celsDegrees={this.state.celsius}
            answer={this.state.answer}
            activity={this.state.activity}
            picture={this.showPic}
            />
      </div>
    );
  }
}

export default App;
