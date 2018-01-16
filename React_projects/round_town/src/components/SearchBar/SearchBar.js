import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" id="city" placeholder="Enter City/Town or PostalCode" />
        <button id="button" type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchBar;
