import React from 'react';
const appID = "26f7dfd9";
const appKey =  "4ca3af03f35fdaec24f01e918541829a";
// const cors = "https://cors-anywhere.herokuapp.com/";

const Oxford = {
  // When Dictionary "Go" button is clicked
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
          // console.log(jsonResponse);
          if (!jsonResponse.results) {
            return [];
          } else {
            return [
              {
                id: jsonResponse.results[0].id,
                def: jsonResponse.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
                ety: jsonResponse.results[0].lexicalEntries[0].entries[0].etymologies[0],
                pron: jsonResponse.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling,
                listen: jsonResponse.results[0].lexicalEntries[0].pronunciations[0].audioFile,
              }
            ]
          }
        }); // end of 2nd .then()
    }, // end of search method

    searchThesaurus: function(word) {
          return fetch(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${word}/synonyms;antonyms`, {
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
              let synonymResults = jsonResponse.results[0].lexicalEntries[0].entries[0].senses[0].synonyms.map(synonym => <li>{synonym.id}</li>);
              return [
                {
                  syn: synonymResults,
                }
              ]
            }
          }); // end of 2nd .then()
      }, // end of search method

} // end of Oxford object

export default Oxford;
