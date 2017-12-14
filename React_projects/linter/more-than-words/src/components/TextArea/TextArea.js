import React, {Component} from 'react';
import './TextArea.css';

class TextArea extends Component {
  render() {
    return (
      <section class="textArea">
        <h3>Enter Text</h3>
        <textarea class="textBox" placeholder="Paste your text here..." autofocus required></textarea>
      </section>
    )
  }
}

export default TextArea;
