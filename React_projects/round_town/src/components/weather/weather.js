import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {
  render() {
    return (
      <section className="weather" id="weather1">
          <div className="weatherLeft">
            <h2></h2>
            <img src="#" alt="" className="weathericon" />
            <p></p>
          </div>

          <div className="weatherRight">
            <h2><span>High:</span>F</h2>
            <h2><span>Wind:</span>mph</h2>
            <h2><span>Low:</span>F</h2>
            <h2><span>Humidity:</span></h2>
          </div>
      </section>
    );
  }
}

export default Weather;
