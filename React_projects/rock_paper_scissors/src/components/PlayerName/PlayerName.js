import React from 'react';
import './PlayerName.css';

// Input to fill in your player name
export const PlayerName = props => {
    return (
      <input type="text"
        placeholder="Your Name"
        className="playerName"
        autofocus
        />
    );
  }
