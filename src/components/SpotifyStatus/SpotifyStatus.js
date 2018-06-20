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
    this.handleAccount = this.handleAccount.bind(this);
    this.renderState = this.renderState.bind(this);
  }

  renderState() {
    const url = window.location.href;
    const loggedIn = url.match(/access_token=([^&]*)/);
    if (loggedIn) {
      this.setState({ login: 'Sign out of Spotify' });
    }
  }

  handleAccount(event) {
    event.preventDefault();
    return window.location.href='https://open.spotify.com/collection/playlists';
  }

  handleLogin(event) {
    event.preventDefault();
    const url = window.location.href;
    const loggedIn = url.match(/access_token=([^&]*)/);
    if (!loggedIn) {
      Spotify.getAccessToken();
      this.setState({ login: 'Sign out on spotify.com' })
    }
  }

  render() {
    return (
      <div>
        {this.renderState}
        <ul className="spotify-buttons">
          <a
            className="login-button"
            onClick={this.handleLogin}
          >
            {this.state.login}
          </a>
          <a
            className="redirect-playlist"
            onClick={this.handleAccount}
          >
            Go to playlists
          </a>
        </ul>
      </div>
    );
  }
};

export default SpotifyStatus;
