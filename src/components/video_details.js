import React from 'react';

const VideoDetails = (props) => {
  if(! props.video) {
    return(
      <div className="row" style={{marginTop: 20}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center text-success">Loading...</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const VIDEO_URL = `https://youtube.com/embed/${props.video.id.videoId}`;

  return(
    <div className="row" style={{marginTop: 20}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" allowFullScreen src={VIDEO_URL} />
              </div>
              <div className="card-body">
                <h4 className="card-title">{props.video.snippet.title}</h4>
                <p className="card-text">{props.video.snippet.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
