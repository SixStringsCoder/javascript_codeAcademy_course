import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <section className="buttonsArea">
        <div className="btnImageBorder"><a href="#"><img className="btnImage" id="rock" src={require("../GameHand/images/rock.jpg")} /></a></div>
        <div className="btnImageBorder"><a href="#"><img className="btnImage" id="paper" src={require("../GameHand/images/paper.jpg")} /></a></div>
        <div className="btnImageBorder"><a href="#"><img className="btnImage" id="scissors" src={require("../GameHand/images/scissors.jpg")} /></a></div>
      </section>
    );
  }
}

export default Button;
