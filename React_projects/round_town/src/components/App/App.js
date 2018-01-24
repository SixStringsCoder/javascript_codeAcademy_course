import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import WeatherList from '../WeatherList/WeatherList';
import AttractionList from '../AttractionList/AttractionList';
import { Destination } from '../Destination/Destination';
import ApiCalls from '../../utility/Api';

const bizName = "'round-Town";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
      venue: [],
      location: "",
      // locDisplay: ""
    }
    this.searchApi = this.searchApi.bind(this);
  }

  searchApi(location) {
    ApiCalls.getForecast(location).then(forecast => {
      // console.log(forecast);
      this.setState({
        forecast: forecast, // the key name from the JSON
      });
    });

    ApiCalls.getVenues(location).then(response => {
      location = response[0].city + ", " + response[0].state + ", " + response[0].country
      console.log(response);
      this.setState({
        venue: response,
        location: location
      });
    });
  }

  // H1 Heading of Location using different displayString key in JSON
  // displayLocation(location) {
  //   console.log(location);
  //   this.setState({
  //     locDisplay: location
  //   });
  // }



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

        <Destination location={this.state.location} />

        <div className="container">
          <WeatherList forecast={this.state.forecast} />
          <AttractionList venue={this.state.venue} />
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
