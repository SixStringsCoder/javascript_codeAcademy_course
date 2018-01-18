import React, { Component } from 'react';
import './Weather.css';

export const Weather = props => {
  return (
    <div className="weather" id="weather1">
      <div class="weatherLeft">
        <h2></h2>
        <img src="#" class="weathericon" />
        <p>  </p>
      <div>

      <div class="weatherRight">
        <h2><span>High:</span>  </h2>
        <h2><span>Wind:</span>    mph</h2>
        <h2><span>Low:</span>  F</h2>
        <h2><span>Humidity:</span> </h2>
      </div>
    </div>
  )
}
