import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextArea.css';

class TextArea extends Component {
  render() {
    return (
      <section class="textArea">
        <h3>Enter Text</h3>
        <textarea class="textBox" placeholder="Paste your text here..." autofocus required>
          {this.props.text}
        </textarea>
      </section>
    )
  }
}

export default TextArea;


TextArea.propTypes = {
  text: PropTypes.string.isRequired,
};
