import React from 'react';
import './SearchBar.css';
//import TrackList from '../TrackList/TrackList';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter a Song, Album, or Artist" />
        {/*<TrackList tracks={this.props.playlistTracks} />*/}
        <a>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
