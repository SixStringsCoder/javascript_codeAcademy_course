import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import WeatherList from '../WeatherList/WeatherList';
import AttractionList from '../AttractionList/AttractionList';
import ApiCalls from '../../utility/Api';

const bizName = "'round-Town";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
      venue: [],
      location: ''
    }
    this.searchApi = this.searchApi.bind(this);
  }

  searchApi(location) {
    ApiCalls.getForecast(location).then(forecast => {
      this.setState({
        forecast: forecast, // the returned array in the JSON
        location: location
      });
    });
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
          <SearchBar search={this.searchApi} />
        </main>

        <div className="container">

          <WeatherList
            forecast={this.state.forecast}
            location={this.state.location}
            />
          <AttractionList />
        </div>

        <footer>
          <p id="copyright">&copy; 2018 Steve Hanlon</p>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  search: PropTypes.func.isRequired
}

export default App;
