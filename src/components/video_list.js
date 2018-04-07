import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  return(
    <div className="row" style={{marginTop: 20}}>
      <div className="container">
        <div className="row">
          { props.videos.map(video => <div key={video.etag} className="col-md-3 col-sm-4"><VideoListItem video={video} onSelectVideo={props.onSelectVideo} /></div>) }
        </div>
      </div>
    </div>
  )
}

export default VideoList;
