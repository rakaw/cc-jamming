import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';


class SearchResults extends React.Component {
  render() {
    console.log('searchResults prop: ');
    console.log(this.props.searchResults);
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.addTrack}
          isRemoval={false} />
      </div>
    );
  }
}

export default SearchResults;
