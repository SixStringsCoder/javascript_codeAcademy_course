import React, {Component} from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList'

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <hr />
          <TrackList tracks={this.props.searchResults}
            onAdd={this.props.onAdd}
            playAudio={this.playAudio}
            stopAudio={this.stopAudio}
            />
      </div>
    );
  }
}

export default SearchResults;
