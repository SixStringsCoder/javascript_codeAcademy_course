import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../PlayList/PlayList';


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
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let newPlayList = this.state.playlistTracks;
    if (!newPlayList.includes(track)) {
      newPlayList.push(track);
      this.setState({
        playlistTracks: newPlayList
      });
    }
  }

  removeTrack(track) {
    let newPlayList = this.state.playlistTracks;
    if (newPlayList.includes(track)) {
      let pos = newPlayList.indexOf(track);
      newPlayList.splice(pos, 1);
      this.setState({
        playlistTracks: newPlayList
      });
    }
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
    });
    return trackURIs;
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar onSearch={this.search}/>
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
