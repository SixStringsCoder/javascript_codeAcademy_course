import React from 'react';
import './SearchBar.css'

// Search bar allow users to search by these key/values
//which should conform to what the Yelp API expects to receive
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        term: '', // search term located in the search input (e.g. Pizza, Noodles)
        location: '', //location entered in the search input
        sortBy: 'best_match'
      };
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
    }

    // returns the current CSS class 'active' for a the sortBy option, highlighting selected menu item in tan
    getSortByClass(sortByOption) {
      if (this.state.sortBy === sortByOption) {
        return 'active';
      } else {
        return '';
      }
    }

    handleSortByChange(sortByOption) {
        this.setState({
          sortBy: sortByOption
        });
    }

    // reflect the text typed into the search Term input element -- "Search Businesses"
    handleTermChange(event) {
        this.setState({
          term: event.target.value,
        });
    }

    // reflect the text typed into the search Location input element -- "Where"
    handleLocationChange(event) {
        this.setState({
          location: event.target.value,
        });
    }

    handleSearch(event) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      // prevent the default action of clicking a link from triggering at the end of the method.
      event.preventDefault();
    }

  /* Dynamically create the list items needed to display
  the sort options (Best Match, Highest Rated, Most Reviewed).*/
  renderSortByOptions() {
    // loop through key and map values, attach a key attribute
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                className={this.getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}>{sortByOption}</li>;
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
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} href="localhost:3000">Lets Go</a>
        </div>
      </div>
    );
  }
} // end SearchBar component

export default SearchBar;
