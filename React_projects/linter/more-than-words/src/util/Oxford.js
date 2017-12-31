// const url = "https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v1/entries/en/city";
const appID = "26f7dfd9";
const appKey =  "4ca3af03f35fdaec24f01e918541829a";
// const cors = "https://cors-anywhere.herokuapp.com/";

const Oxford = {
  // // Retrieves an access token from Oxford API to authenticate requests and retrieve data
  // getAccess: function() {
  //   const xhr = new XMLHttpRequest();
  //
  //   xhr.responseType = 'json';
  //   xhr.onreadystatechange = function() {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //      console.log(xhr.response);
  //     }
  //   }
  //
  //   xhr.open('GET', url, true);
  //   xhr.setRequestHeader("Accept", "application/json")
  //   xhr.setRequestHeader("app_id", appID);
  //   xhr.setRequestHeader("app_key", appKey);
  //   xhr.send();
  // },

  search: function(word) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${word}`, {
          headers: {
            Accept: "application/json",
            app_id: appID,
            app_key: appKey
          }
        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
          console.log(jsonResponse);
          if (jsonResponse.results) {
            // console.log(jsonResponse.results[0]);
            // console.log(jsonResponse.results[0].id);
            // console.log(jsonResponse.results[0].lexicalEntries[0].entries[0].etymologies[0]);

            return [
              { id: jsonResponse.results[0].id,
               ety: jsonResponse.results[0].lexicalEntries[0].entries[0].etymologies[0]
              }
            ]
          }
        }); // end of 2nd .then()
    }, // end of search method

} // end of Oxford object

export default Oxford;
