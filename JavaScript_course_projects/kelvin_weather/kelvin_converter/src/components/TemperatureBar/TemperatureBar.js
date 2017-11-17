import React from 'react';
import ReactDOM from 'react-dom';
import './TemperatureBar.css';

class TemperatureBar extends React.Component {
  render() {
    return (
      <section className="TempBar">
        <h3>Enter the Kelvin temperature.</h3>
        <input type="text" placeholder="Right here, Buttercup!" />
        <a onClick="convertTemp" href="#">Konvert</a>
      </section>
    );
  }
}


export default TemperatureBar;
