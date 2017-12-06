import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import '../GameHand/GameHand.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theChoice: undefined,
    }
    this.clickEventHandler = this.clickEventHandler.bind(this);
  }

  // This method sets state to index positions, 0 to 2, for handChoices array in App.js
  clickEventHandler(event) {
    event.preventDefault();
    let indexNumber = Number(event.target.id);

    this.setState({
      theChoice: indexNumber
    });

    this.props.theChoice(indexNumber);
  }

  render() {
    return (
      <section className="buttonsArea">
        <div className="btnImageBorder"><a onClick={this.clickEventHandler}><img className="btnImage" id="0" src={require("../GameHand/images/rock.png")} /></a></div>
        <div className="btnImageBorder"><a onClick={this.clickEventHandler}><img className="btnImage" id="1" src={require("../GameHand/images/paper.png")} /></a></div>
        <div className="btnImageBorder"><a onClick={this.clickEventHandler}><img className="btnImage" id="2" src={require("../GameHand/images/scissors.png")} /></a></div>
        <div className="playAgainDiv"><button className="btnPlayAgain" onClick={this.props.playAgain}>PLAY AGAIN</button></div>
      </section>
    );
  }
}

Button.propTypes = {
  playAgain: PropTypes.func.isRequired,
  theChoice: PropTypes.func.isRequired,
}

export default Button;
