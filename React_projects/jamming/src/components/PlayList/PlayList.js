import React, {Component} from 'react';
import TrackList from '../TrackList/TrackList'

class Playlist extends Component {
  render() {
    return (
      <!-- Make Playlist Module with this.state as empty array -->
      <div class="Playlist">
        <input value='New Playlist' />
          <!-- Add TrackList component -->
          <TrackList />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;
