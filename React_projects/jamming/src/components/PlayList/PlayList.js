import React, {Component} from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList'

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    const nameChange = event.target.value;
    this.props.onNameChange(nameChange);
  }

  render() {
    return (
      /* Make Playlist Module with this.state as empty array */
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
          <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;
