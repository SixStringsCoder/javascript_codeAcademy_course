import React from 'react';
import './DictResults.css';

export const DictResults = (props) => {
    return (
          <div className="definitionBox">
            <p><span id="term">{props.detail.id}</span> - {props.detail.def}</p>
            <p><span className="classify">etymology</span>: {props.detail.ety}</p>
            <p><span className="classify">pronunciation:</span> {props.detail.pron}</p>
            <div>
              <audio className="my_audio" controls preload="none">
                  <source src={props.detail.listen} type="audio/mpeg" />
              </audio>
            </div>

            <p><span className="classify">synonyms</span>: {props.detail.syn}</p>
            <p><span className="classify">antonyms:</span> {props.detail.ant}</p>

          </div>
    )
  }
