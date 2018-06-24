import React from 'react';
import Spotify from '../../util/Spotify';
import './SpotifyStatus.css';

class SpotifyStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: 'Sign in to Spotify'
    };

    //bindings
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    const url = window.location.href;
    const loggedIn = url.match(/access_token=([^&]*)/);
    if (!loggedIn) {
      Spotify.getAccessToken();
      this.setState({ login: 'Sign out on spotify.com' })
    } else if (this.state.login === 'Sign out on spotify.com') {
      window.location.href = 'https://www.spotify.com/login';
    } else {
      this.setState({ login: 'Sign out on spotify.com '})
    }
  }

  render() {
    return (
      <div>
        <div className="spotify-buttons">
          <a className="login-button" onClick={this.handleLogin} >
            {this.state.login}
          </a>
          <a
            className="redirect-playlist"
            href="https://open.spotify.com/collection/playlists" >
            Go to playlists
          </a>
        </div>
      </div>
    );
  }
};

export default SpotifyStatus;
