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
      <section class="oxfordArea">
          <h5>Dictionary & Thesaurus</h5>
        <div class="dictTitleAndBtn">
          <input type="text" class="wordInputGoBtn" placeholder="Enter word"/>
          <button onClick={this.handleWord('chicken')} id="defineBtn">Go</button>
        </div>
          <div class="definitionBox"></div>
      </section>
    )
  }
}

export default Dictionary;
