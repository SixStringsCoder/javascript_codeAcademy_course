import React, {Component} from 'react';
import './Dictionary.css';


class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '', // search term located in the search input
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleWordEntry = this.handleWordEntry.bind(this);
  }

  // Set state to the text typed into the search Enter Word input element
  handleWordEntry(event) {
    this.setState({
      word: event.target.value,
    });
  }

  handleSearch(event) {
    this.props.lookUpWord(this.state.word);
    // prevent the default action of clicking a link from triggering at the end of the method.
    event.preventDefault();
  }

  render() {
    return (
      <section className="oxfordArea">
          <h5>Dictionary & Thesaurus</h5>
        <div className="dictTitleAndBtn">
          <input onChange={this.handleWordEntry} type="text" className="wordInputGoBtn" placeholder="Enter word"/>
          <button onClick={this.handleSearch} id="defineBtn">Go</button>
        </div>
          <div className="definitionBox">
          </div>
      </section>
    )
  }
}

export default Dictionary;
