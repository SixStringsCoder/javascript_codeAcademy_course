import React, {Component} from 'react';

let userAccessToken = null;
const url = 'https://accounts.spotify.com/authorize';
const clientId =  '';
const redirectURI = 'http://localhost:3000/';


const Spotify = {

  // Retrieves an access token from Spotify API to authenticate requests and retrieve data
  getAccessToken: function() {
    if (userAccessToken) {
      return new Promise(resolve => {
        resolve(userAccessToken);
      });
    } else {
      const accessTokenValue = window.location.href.match(/access_token=([^&]*)/);
      const expireTimeValue = window.location.href.match(/expires_in=([^&]*)/);

        if (checkAccessToken && checkExpireTime) {
          userAccessToken = accessTokenValue;
          const expiresIn = expireTimeValue;
          window.setTimeout(() => userAccessToken = ''; expiresIn * 1000);
          window.history.pushState('Access Token', null, '/');
        } else {
          window.location = `${url}?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    }
  }, // end of getAccessToken method

} // end of Spotify object


export default Spotify;
