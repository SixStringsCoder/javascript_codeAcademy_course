let userAccessToken;
const url = 'https://accounts.spotify.com/authorize';
const clientId =  '2440eef637cc4fc996015127cde2c3f7';
const redirectURI = 'http://localhost:3000/';
// const redirectURI = 'http://g7flat9.surge.sh';

const Spotify = {

  // Retrieves an access token from Spotify API to authenticate requests and retrieve data
  getAccessToken: function() {
    if (userAccessToken) {
      return userAccessToken;
    }

      const accessTokenValue = window.location.href.match(/access_token=([^&]*)/);
      const expireTimeValue = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenValue && expireTimeValue) {
          userAccessToken = accessTokenValue[1];
          const expiresIn = Number(expireTimeValue[1]);
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
      console.log(jsonResponse.tracks);
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        image: track.album.images[2].url,
        preview: track.preview_url,
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
