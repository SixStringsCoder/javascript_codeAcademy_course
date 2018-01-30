import React from 'react';
import './DictResults.css';
// <p><span className="classify">antonyms:</span> {props.detail.ant}</p>
export const DictResults = (props) => {
    return (
          <div>
            <p><span id="term">{props.detail.id} ({props.detail.part})</span> {props.detail.def}</p>
            <p><span className="classify">etymology</span>: {props.detail.ety}</p>
            <p><span className="classify">pronunciation:</span> {props.detail.pron}</p>
            <div>
              <audio className="my_audio" id="audioPlayer" controls controlsList="nodownload">
                  <source src={props.detail.listen} type="audio/mpeg" />
              </audio>
            </div>


          </div>
    )
  }
