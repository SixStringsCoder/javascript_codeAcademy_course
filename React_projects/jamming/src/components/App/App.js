import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import SearchResults from '../SearchResults/SearchResults';
import SearchResults from '../SearchBar/SearchBar';
import SearchResults from '../PlayList/PlayList';


class App extends Component {
  render() {
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
            // Add SearchBar Component
            <SearchBar />
              <div className="App-playlist">
              // Add SearchResults Component
              <SearchResults />
              // Add PlayList Component
              <PlayList />
              </div>
            </div>
      </div>
    );
  }
}

export default App;
