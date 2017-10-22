/*
build a program that helps designers think of new color schemes.
The program will set the screen's background to a random color.
Clicking a button will refresh to a new, random color.
created on Oct 21, 2017 by Steve Hanlon
*/


import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

// Random stores a random color, then uses that color to update the screen's background.
class Random extends React.Component {
  constructor(props) {
    super(props);
    // Store the random color as state.
    this.state = { color: [23, 145, 100] };
    this.handleClick = this.handleClick.bind(this);
  }

  // Define an event handler that updates this.state.color
  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }

  // lifecycle method
  componentDidMount() {
    this.applyColor();
  }

  // lifecycle method
  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  //  This transforms an rgb array into a readable CSS-like property.
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  // text is white if the screen's background is a darker color, but the text is black is the screen's background is a lighter color.
  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  // Create three random values between 0 and 256 to make three RGB values
  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
				Your color is {this.formatColor(this.state.color)}
        </h1>
        // Render a <Button /> instance
        <Button  onClick={this.handleClick} light={this.isLight()} />
      </div>
    );
  }
}

ReactDOM.render(
  <Random />,
  document.getElementById('app')
);
