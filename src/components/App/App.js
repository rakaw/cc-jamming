import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';

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
      <div className="App">
        <h1>jamming</h1>
        <SearchBar />
      </div>
    )
  }
}

export default App;
