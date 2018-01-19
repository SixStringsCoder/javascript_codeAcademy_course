// Foursquare API Info
const clientId = 'ZCNOO2SK3USWMUXPMBM5WR3ALMNEZAFJBZDFPEVSDLTDKOYI';
const clientSecret = 'FQWXQHYW2E5SJIOWNWEXMYHRSZZN2Y401TXYHRPTP5XOTM0E';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const imgPrefix = 'https://igx.4sqi.net/img/general/150x200';

// APIXU Info
const apiKey = '08a7fc1afc044d27a9a34310181301';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

// Page Elements
const venueDivs = [document.getElementById('venue')];
const weatherDivs = [document.getElementById('weather')];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


// AJAX Calls Object
const ApiCalls = {
  // Return weatherforecast based on Search input value
  getForecast: function(location) {
    const urlToFetch = `${forecastUrl}${apiKey}&q=${location}&days=7`
    return fetch(urlToFetch)
        .then(response => {
        return response.json();
      }).then(jsonResponse => {
          console.log(jsonResponse);
        if (jsonResponse.forecast) {
          return jsonResponse.forecast.forecastday.map(forecastday => {
           ({
            // thisDay: weekDays[(new Date(forecastDay.date)).getDay()],
            icon: forecastday.day.condition.icon,
            // condition: forecastDay.day.condition.text,
            // fHigh: forecastDay.day.maxtemp_f,
            // wind: forecastDay.day.maxwind_mph,
            // fLow: forecastDay.day.mintemp_f,
            // humidity: forecastDay.day.avghumidity
          })
          }); // end of .map
        }
      }); // end of then(jsonResponse
  },

  // Return venues based on Search value input
  // getVenues: function(location) {
  //   const urlToFetch = `${url}${location}&venuePhotos=1&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20171030`;
  //
  //   try {
  //     let response = await fetch(urlToFetch);
  //     if (response.ok) {
  //       let jsonResponse = await response.json();
  //       console.log(jsonResponse);
  //       let venues = jsonResponse.response.groups[0].items.map(location => location.venue);
  //       return venues;
  //     }
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }
}

export default ApiCalls
