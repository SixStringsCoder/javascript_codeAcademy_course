import React, {Component} from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

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
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
          <TrackList tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          playAudio={this.playAudio}
          stopAudio={this.stopAudio}
          />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;