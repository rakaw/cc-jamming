import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2}
      ],
      playlistTracks: [
        {name: 'pname1', artist: 'partist1', album: 'palbum1', id: 4},
        {name: 'pname2', artist: 'partist2', album: 'palbum2', id: 5}
      ],
      playlistName: 'Playlist Name Here'
    };

    //bindings
    this.searchSpotify = this.searchSpotify.bind(this);
    this.addTrack = this.addTrack.bind(this);
  }

  //Simulate the "let's go" button
  searchSpotify(q, type) {
    Spotify.search(q, type).then(songs => {
      this.setState({songs: songs});
    })
  }

  addTrack(track) {
    const tracks = this.state.playlistTracks;
    const output = tracks.find(currrTrack => currrTrack.id === track.id);

    if (!output) {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              addTrack={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
