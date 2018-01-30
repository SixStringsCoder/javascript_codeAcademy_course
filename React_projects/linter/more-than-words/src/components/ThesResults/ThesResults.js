import React from 'react';
import './ThesResults.css';
// <p><span className="classify">antonyms:</span> {props.detail.ant}</p>
export const ThesResults = (props) => {
    return (
      <div className="thesaurusWords"><span className="classify">synonyms</span>:
        <ul>
          {props.detail.syn}
        </ul>
      </div>
    )
  }
