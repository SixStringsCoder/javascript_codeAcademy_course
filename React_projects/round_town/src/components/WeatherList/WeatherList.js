import React, { Component } from 'react';
import './WeatherList.css';
import { Weather } from '../Weather/Weather';

export const WeatherList = props => {
    return(
      <section>
        <div className="sectiontitle">
          <h2>Weather</h2>
        </div>

        <div id="weather">
          {
            props.forecastday.forEach((forecast, index) => {
              return <Weather forecast={forecast} key={index} />
            });
          }
        </div>
      </section>
    );
  }
