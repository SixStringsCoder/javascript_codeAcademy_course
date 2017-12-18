import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Analyze.css';
import AnalyzeTextArea from '../AnalyzeTextArea/AnalyzeTextArea';

class Analyze extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const words = event.target.value;
    this.props.analyze(words);
  }

  render() {
    return (
      <section class="analyzerArea">
        <div class="analyzeBtnArea">
          <button id="analyze" onClick={this.handleClick}>Analyze</button>
          <button id="translate">Translate</button>
        </div>

        <AnalyzeTextArea print={this.props.print} />

      </section>
    );
  }
}

export default Analyze;

Analyze.propTypes = {
  analyze: PropTypes.func.isRequired,
}
