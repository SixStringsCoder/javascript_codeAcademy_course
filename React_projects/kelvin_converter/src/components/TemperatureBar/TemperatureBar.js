import React from 'react';
import './TemperatureBar.css';

// TemperatureBar receives convertTemp method for onChange handler to set state of Kelvin
// and props for onClick event
class TemperatureBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      k_number: null
    }
    this.handleInputEvent = this.handleInputEvent.bind(this);
    this.convert = this.convert.bind(this);
  }

  convert() {
    this.props.convert(this.state.k_number);
  }

  handleInputEvent(event) {
      this.setState({
        k_number: event.target.value
      });
  }

  render() {
    return (
      <section id="TempBar" className="TempBar">
        <h3>Enter the Kelvin temperature.</h3>
        <input type="text" placeholder="Right here, Buttercup!" onChange={this.handleInputEvent} />
        <a onClick={this.convert} href="#TempBar">Konvert</a>
      </section>
    );
  }
}


export default TemperatureBar;
