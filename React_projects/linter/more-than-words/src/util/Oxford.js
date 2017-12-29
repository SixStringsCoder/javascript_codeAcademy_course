const url = 'https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v1/entries/en/city';
const appID = '26f7dfd9';
const appKey =  '';
// const redirectURI = 'http://localhost:3000/';

// const language = 'en/';
const word_id = '';


const Oxford = {
  // Retrieves an access token from Oxford API to authenticate requests and retrieve data
  getAccess: function() {
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
       console.log(xhr.response);
      }
    }

    xhr.open('GET', url, true);
    xhr.setRequestHeader("Accept", "application/json")
    xhr.setRequestHeader("app_id", appID);
    xhr.setRequestHeader("app_key", appKey);
    xhr.send();
  },

  search: function(term) {
    const wordLookUp = url + word_id.toLowerCase();

      fetch(wordLookUp).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message);
    }).then(jsonResponse => jsonResponse);
  }

} // end of Oxford object

export default Oxford;
