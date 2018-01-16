import React, { Component } from 'react';
import './WeatherList.css';

class WeatherList extends Component {
  render() {
    return(

      <section>
        <div className="sectiontitle">
          <h2>Weather</h2>
        </div>

        <div id="weather">

            <div className="weather" id="weather1">

            </div>
            <div className="weather" id="weather2">

            </div>
            <div className="weather" id="weather3">

            </div>
            <div className="weather" id="weather4">

            </div>

            <div className="weather" id="weather5">

            </div>
            <div className="weather" id="weather6">

            </div>
            <div className="weather" id="weather7">

            </div>

        </div>
      </section>
    );
  }
}

export default WeatherList;
