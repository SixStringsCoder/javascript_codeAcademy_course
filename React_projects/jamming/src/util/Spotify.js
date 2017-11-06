let userAccessToken;
const url = 'https://accounts.spotify.com/authorize';
const clientId =  '';
const redirectURI = 'http://localhost:3000/';


const Spotify = {

  // Retrieves an access token from Spotify API to authenticate requests and retrieve data
  getAccessToken: function() {
    if (userAccessToken) {
      return new Promise(resolve => resolve(userAccessToken));
    }

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
  },

  search: function(term) {
    const accessToken = Spotify.getAccessToken();
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
     });
   },

   savePlaylist: function(listName, trackUris) {
     if ( !listName || !trackUris.length ) {
        return;
       }

       const accessToken = Spotify.getAccessToken();
       const headers = { Authorization: `Bearer ${accessToken}`}
       let userID;

       return fetch('https://api.spotify.com/v1/me', {headers: headers}
       ).then(response => response.json()
       ).then(jsonResponse => {
         userID = jsonResponse.id;
         return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,{
         method: 'POST',
         headers: headers,
         body: JSON.stringify({ name: listName })
         }).then(response =>  response.json()
         ).then(jsonResponse => {
           const playlistID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,{
           method: 'POST',
           headers: headers,
           body: JSON.stringify({ uris: trackUris })
         });
       });
     });
   } // end of savePlaylist method
} // end of Spotify object


export default Spotify;
