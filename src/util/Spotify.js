// import client info from de-encrypted file
import { clientID } from './Secret';

// variables for link
let userAccessToken = '';
const redirectURI = 'http://localhost:3000/';


const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    }
    const url = window.location.href;
    const accessToken = url.match(/access_token=([^&]*)/);
    const expiresIn = url.match(/expires_in=([^&]*)/);

    if (userAccessToken && expiresIn) {
      userAccessToken = accessToken[1];
      const expirationTime = Number(expiresIn[1])*1000;
      window.setTimeOut(() => {
        userAccessToken = '';
      }, expirationTime);
      window.history.pushState('For Access Token', null, '/');
      return userAccessToken;
    } else {
      window.location.href =
      `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },

  search(term) {
    const accessToken = this.getAccessToken();
    const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then( response => {
      return response.json();
    }).then(jsonResponse => {
      if(!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.map(track => {
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        };
      })
    });
  }
}


export default Spotify;
