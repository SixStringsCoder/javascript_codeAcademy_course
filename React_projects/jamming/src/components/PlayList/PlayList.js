import React, {Component} from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList'

class PlayList extends Component {
  render() {
    return (
      /* Make Playlist Module with this.state as empty array */
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
          <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;
