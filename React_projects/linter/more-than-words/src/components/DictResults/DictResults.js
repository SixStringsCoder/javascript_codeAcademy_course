import React from 'react';
import './DictResults.css';

export const DictResults = (props) => {
    return (
          <div className="definitionBox">
            <p><strong>{props.detail.id} - </strong></p>
            <p>Etymology: {props.detail.ety}</p>
          </div>
    )
  }
