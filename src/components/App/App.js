import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    }

    //bindings
    this.searchSpotify = this.searchSpotify.bind(this);
  }

  //Simulate the "let's go" button
  searchSpotify(q, type) {
    Spotify.search(q, type).then(songs => {
      this.setState({songs: songs});
    })
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
