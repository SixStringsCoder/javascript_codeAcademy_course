import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextArea.css';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newText = event.target.value;
    this.props.addText(newText);
  }

  render() {
    return (
      <section className="textArea">
        <h3>Enter Text</h3>
        <textarea onChange={this.handleChange} className="textBox" placeholder="Paste your text here..." autoFocus required>
          {this.props.text}
        </textarea>
      </section>
    )
  }
}

export default TextArea;


TextArea.propTypes = {
  addText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
