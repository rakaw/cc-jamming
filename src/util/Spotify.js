//import { clientID, clientSecret} from './Secret.js.gpg';
import React from 'react';

class Spotify extends React.Component {
  search(q, type) {
    const corsUrl = 'https://www.cors-anywhere.herokuapp.com/';
    const url = 'https://api.spotify.com';
    const fullUrl = `${corsUrl}${url}`;
    return fetch(fullUrl, {
      PLACEHOLDER: []
    }).then( response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse) { //PLACEHOLDER
        return; //PLACEHOLDER
      }
    });
  }

  render() {
    return (
      <h1>hi</h1>
    )
  }
}


export default Spotify;
