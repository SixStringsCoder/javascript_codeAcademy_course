import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import '../../index.css';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../PlayList/PlayList';
import TrackList from '../TrackList/TrackList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: 'Cool Vibes', artist: 'The Shenanigans', album: 'Making Hay' }
      ],
      playlistName: 'My Fav-a-favs',
      playlistTracks: [
        { name: 'Open Arms', artist: 'Journey', album: 'Escape' },
        { name: 'War Pigs', artist: 'Black Sabbath', album: 'Paranoid' },
        { name: 'Magic Power', artist: 'Triumph', album: 'Allied Forces' },
      ],
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    this.state.playlistTracks.map(playlistTrack => {
      if (playlistTrack.key != this.props.key) {
        return track;
      }
    })
    this.setState({
      playlistTracks: [...this.state.playlistTracks, track]
    });
  }

  removeTrack(track) {
    this.playlistTracks.filter(playlistTrack => {
      if (playlistTrack.key === this.props.key) {
        this.playlistTracks.splice(track, 1);
      }
    })
    this.setState({
      playlistTracks: this.playlistTracks
    });
  }

  updatePlaylistName(newName) {
    this.setState({
      playlistName: newName
    });
  }

  savePlaylist(playlistTracks) {
    let trackURIs = [];
    playlistTracks.filter(track => {
      let uri = track.uri
      trackURIs.push(uri);
    }
    return trackURIs;
  }

  render() {
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar />
                <div className="App-playlist">
                  <SearchResults searchResults={this.state.searchResults}
                                onAdd={this.addTrack}
                                />
                  <PlayList playlistName={this.state.playlistName}
                        playlistTracks={this.state.playlistTracks}
                        onRemove={this.removeTrack}
                        onNameChange={this.updatePlaylistName}
                        onSave={this.savePlaylist}
                        />
                </div>
            </div>
      </div>
    );
  }
}

export default App;
