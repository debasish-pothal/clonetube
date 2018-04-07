import React, { Component } from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super();
  }

  selectVideo = (video) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    this.props.onSelectVideo(video);
  }

  render() {
    return(
        <div className="card" style={{marginBottom: 20}}>
          <img className="card-img-top" src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.title} />
          <div className="card-body">
            <h4 className="card-title">{this.props.video.snippet.title}</h4>
            <button className="btn btn-circle btn-outline-primary" onClick={() => this.selectVideo(this.props.video)}><i className="fa fa-2x fa-play"></i></button>
          </div>
        </div>
    );
  }
}

export default VideoListItem;
