import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AnalyzeTextArea.css';


class AnalyzeTextArea extends Component {
  render() {
    return (
        <div className="analyzeTextArea">
          <div className="analyzeBox">
            {this.props.printAnalysis}
          </div>
        </div>
    );
  }
}

export default AnalyzeTextArea;

AnalyzeTextArea.propTypes = {
  printAnalysis: PropTypes.string.isRequired,
}
