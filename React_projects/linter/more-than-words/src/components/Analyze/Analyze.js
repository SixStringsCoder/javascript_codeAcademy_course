import React, {Component} from 'react';
import './Analyze.css';

class Analyze extends Component {
  render() {
    return (
      <section class="analyzerArea">
        <div class="analyzeBtnArea">
          <button id="analyze">Analyze</button>
          <button id="translate">Translate</button>
        </div>
        <div class="analyzeTextArea">
          <div class="analyzeBox"></div>
        </div>
      </section>
    );
  }
}

export default Analyze;
