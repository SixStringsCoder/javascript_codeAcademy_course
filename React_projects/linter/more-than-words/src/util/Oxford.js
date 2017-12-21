const url = 'https://od-api.oxforddictionaries.com/api/v1/entries/';
const appID = '26f7dfd9';
const appKey =  'c3a28abd92decfe1b9d8375ff46b77c8';
// const redirectURI = 'http://localhost:3000/';

const language = 'en/';
const word_id = 'chicken';


const Oxford = {
  // Retrieves an access token from Oxford API to authenticate requests and retrieve data
  getAccess: function() {

    const xhr = new XMLHttpRequest();
    const url = 'https://od-api.oxforddictionaries.com/api/v1/entries/en/city';

    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
       console.log(xhr.response);
      }
    }

    xhr.open('GET', url, true);
    xhr.setRequestHeader("app_id", "26f7dfd9");
    xhr.setRequestHeader("app_key", "c3a28abd92decfe1b9d8375ff46b77c8");
    xhr.send();
  },

  search: function(term) {
    const wordLookUp = url + language + word_id.toLowerCase();

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
