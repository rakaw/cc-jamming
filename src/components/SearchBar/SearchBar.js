import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      q: '',
      type: 'album'
    }
    //Bindings
    this.handleQChange = this.handleQChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    //this.state.type options
    this.typeOptions = ['album', 'artist', 'playlist', 'track']
  }

  //methods: handles state changes
  handleQChange(e) {
    this.setState({q: e.target.value});
  }
  handleTypeChange(e) {
    this.setState({type: e.target.value});
  }
  handleSearch(e) {
    this.props.searchSpotify(this.state.q, this.state.type);
    e.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter a song title" />
        <a>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
