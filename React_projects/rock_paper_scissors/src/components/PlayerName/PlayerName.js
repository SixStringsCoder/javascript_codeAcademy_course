import React from 'react';
import './PlayerName.css';

class PlayerName extends React.Component {



  render() {
    return (
      <input type="text"
        placeholder="Your Name"
        className="playerName"
        autofocus
        />
    );
  }
}

export default PlayerName;
