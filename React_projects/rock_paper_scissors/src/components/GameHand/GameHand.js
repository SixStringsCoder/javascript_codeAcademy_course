import React from 'react';
import './GameHand.css';

class GameHand extends React.Component {
  render() {
    return (

      <section className="gameHands">
          <div><img id="rpsImages_me" className="gameHandsImage" src={require('./images/rock.jpg')} /></div>
          <div><img id="rpsImages_me" className="gameHandsImage" src={require('./images/scissors.jpg')} /></div>
      </section>

    );
  }
}

export default GameHand;
