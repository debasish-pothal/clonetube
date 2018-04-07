import React, { Component } from 'react';

import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetails from './video_details';

const API_KEY = 'AIzaSyBqdb4bBPb6tjLGKUatP8S8YEUPYS8ZovM';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.searchVideo('funny animals');
  }

  selectVideo = (selectedVideo) => {
    this.setState({
      selectedVideo
    });
  }

  searchVideo = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    return (
      <div className="container-fluid" style={{padding: 0}}>
        <SearchBar onSearchVideo={this.searchVideo} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onSelectVideo={this.selectVideo} />
      </div>
    );
  }
}
