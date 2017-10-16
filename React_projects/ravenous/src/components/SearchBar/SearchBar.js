import React from 'react';
import './SearchBar.css'

// Search bar allow users to search by these key/values
//which should conform to what the Yelp API expects to receive
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
  /* Dynamically create the list items needed to display
  the sort options (Best Match, Highest Rated, Most Reviewed).*/
  renderSortByOptions() {
    // loop through key and map values, attach a key attribute
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>
    );
  }
} // end SearchBar component

export default SearchBar;
