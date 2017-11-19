import React from 'react';
import './TemperatureBar.css';

class TemperatureBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      k_number: 0
    }
    this.handleInputEvent = this.handleInputEvent.bind(this);
    this.convert = this.convert.bind(this);
  }

  convert() {
    this.props.convert(this.state.k_number)
  }

  handleInputEvent(event) {
    this.setState({
      k_number: event.target.value
    });
  }

  render() {
    return (
      <section className="TempBar">
        <h3>Enter the Kelvin temperature.</h3>
        <input type="text" placeholder="Right here, Buttercup!" onChange={this.handleInputEvent} />
        <a onClick={this.convert} href="#results">Konvert</a>
      </section>
    );
  }
}


export default TemperatureBar;
