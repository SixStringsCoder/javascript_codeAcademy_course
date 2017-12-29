import React, {Component} from 'react';
import './Dictionary.css';

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.handleWord = this.handleWord.bind(this);
  }

  handleWord(event) {
    // const word = event.target.value;
    this.props.lookUpWord(event);
  }

  render() {
    return (
      <section className="oxfordArea">
          <h5>Dictionary & Thesaurus</h5>
        <div className="dictTitleAndBtn">
          <input type="text" className="wordInputGoBtn" placeholder="Enter word"/>
          <button onClick={this.handleWord} id="defineBtn">Go</button>
        </div>
          <div className="definitionBox"></div>
      </section>
    )
  }
}

export default Dictionary;
