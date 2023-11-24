import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 0, // Set to 1 to autoplay the video
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoPlayer;
