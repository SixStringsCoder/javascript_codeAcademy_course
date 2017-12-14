import React, {Component} from 'react';
import './Dictionary.css';

class Dictionary extends Component {
  render() {
    return (
      <section class="oxfordArea">
          <h5>Dictionary & Thesaurus</h5>
        <div class="dictTitleAndBtn">
          <input type="text" class="wordInputGoBtn" placeholder="Enter word"/>
          <button id="defineBtn">Go</button>
        </div>
          <div class="definitionBox"></div>
      </section>
    )
  }
}

export default Dictionary;
