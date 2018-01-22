import React from 'react';
import './Destination.css';

export const Destination = props => {
  return (
    <div id="destination">
      <h1>{props.location}</h1>
    </div>
  )
}
