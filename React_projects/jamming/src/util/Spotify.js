let userAccessToken = null;
const url = 'https://accounts.spotify.com/authorize';
const clientId =  '';
const redirectURI = 'http://localhost:3000/';


const Spotify = {

  // Retrieves an access token from Spotify API to authenticate requests and retrieve data
  getAccessToken: function() {
    if (userAccessToken) {
      return new Promise(resolve => resolve(userAccessToken));
    } else {
      const accessTokenValue = window.location.href.match(/access_token=([^&]*)/);
      const expireTimeValue = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenValue && expireTimeValue) {
          userAccessToken = accessTokenValue;
          const expiresIn = expireTimeValue;
          window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/');
        } else {
          window.location = `${url}?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    }
  }, // end of getAccessToken method

  search(term) {
    return Spotify.getAccessToken().then(() => {
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
            Authorization: `Bearer ${userAccessToken}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse) {
        return jsonResponse.map(track => {
          return {
            id: track.id,
            track_name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }
        }); // end of .map()
      } else {
        return [];
      }
     }); // end of 2nd .then()
    }); // end of 1st .then()
   },  // end of search method

} // end of Spotify object


export default Spotify;
