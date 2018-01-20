import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {
  render() {
    return (
      <section className="weather" id={this.props.day.thisDay}>
          <div className="weatherLeft">
            <h2>{this.props.day.thisDay}</h2>
            <img src={this.props.day.icon} alt={this.props.day.condition} className="weathericon" />
            <p>{this.props.day.condition}</p>
          </div>

          <div className="weatherRight">
            <h2><span>High:</span>{this.props.day.fHigh}F</h2>
            <h2><span>Wind:</span>{this.props.day.wind}mph</h2>
            <h2><span>Low:</span>{this.props.day.fLow}F</h2>
            <h2><span>Humidity:</span>{this.props.day.humidity}</h2>
          </div>
      </section>
    );
  }
}

export default Weather;
