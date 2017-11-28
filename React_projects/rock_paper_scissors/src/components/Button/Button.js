import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theChoice: undefined,
    }
    this.clickEventHandler = this.clickEventHandler.bind(this);
  }


  clickEventHandler(event) {
    let indexNumber = Number(event.target.id);

    this.setState({
      theChoice: indexNumber
    });
    
    this.props.theChoice(indexNumber);
    console.log(indexNumber, typeof indexNumber);
  }

  render() {
    return (
      <section className="buttonsArea">
        <div className="btnImageBorder"><a onClick={this.clickEventHandler}><img className="btnImage" id="0" src={require("../GameHand/images/rock.jpg")} /></a></div>
        <div className="btnImageBorder"><a onClick={this.clickEventHandler}><img className="btnImage" id="1" src={require("../GameHand/images/paper.jpg")} /></a></div>
        <div className="btnImageBorder"><a onClick={this.clickEventHandler}><img className="btnImage" id="2" src={require("../GameHand/images/scissors.jpg")} /></a></div>
      </section>
    );
  }
}

export default Button;
