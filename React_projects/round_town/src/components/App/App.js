import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import WeatherList from '../WeatherList/WeatherList';
import AttractionList from '../AttractionList/AttractionList';

const bizName = "'round-Town";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <header>
          <div className="logoCompany">
            <img className="logo" src={require("./images/Eyes_Emoji_grande.png")} alt="eyes logo" />
            <span className="companyName">{bizName}</span>
          </div>
        </header>

        <main>
          <SearchBar />
        </main>

        <div class="container">
          <div id="destination">
            <h1>Portland, Oregon</h1>
          </div>

          <WeatherList />
          <AttractionList />
        </div>

        <footer>
          <p id="copyright">&copy; 2018 Steve Hanlon</p>
        </footer>
      </div>
    );
  }
}

export default App;
