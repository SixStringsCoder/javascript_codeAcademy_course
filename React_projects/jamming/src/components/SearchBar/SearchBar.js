import React, {Component} from 'react';

<!-- SearchBar Component -->
class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song Title" />
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
