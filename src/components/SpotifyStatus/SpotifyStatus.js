import React from 'react';
import Spotify from '../../util/Spotify';
import './SpotifyStatus.css';

class SpotifyStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: ''
    };

    //bindings
    this.handleLogin = this.handleLogin.bind(this);
    this.handleAccount = this.handleAccount.bind(this);
  }

  renderState() {
    if (this.state.login === '') {
      return this.setState({ login: 'Sign in to Spotify' })
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
        {this.renderState()}
        <ul className="spotify-buttons">
          <input
            className="login-button"
            type="button"
            value={this.state.login}
            onClick={this.handleLogin} />
          <input
            className="redirect-playlist"
            type="button"
            onClick={this.handleAccount}
            value="Go to playlists" />
        </ul>
      </div>
    );
  }
};

export default SpotifyStatus;
