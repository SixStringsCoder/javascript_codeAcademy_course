import React, {Component} from 'react';
import './Analyze.css';
import AnalyzeTextArea from '../AnalyzeTextArea/AnalyzeTextArea';

class Analyze extends Component {
  render() {
    return (
      <section class="analyzerArea">
        <div class="analyzeBtnArea">
          <button id="analyze">Analyze</button>
          <button id="translate">Translate</button>
        </div>

        <AnalyzeTextArea />

      </section>
    );
  }
}

export default Analyze;
