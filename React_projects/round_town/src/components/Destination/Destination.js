import React from 'react';
import './Destination.css';

export const Destination = props => {
  return (
    <div id="destination">
      <h1>{props.locationFullName}</h1>
    </div>
  )
}
