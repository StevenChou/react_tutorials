import React from 'react';

// const VideoListItem = (props) => {
//   const video = props.video;

//   return <li>video</li>
// };

const VideoListItem = ({video}) => {
  const imagUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imagUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;