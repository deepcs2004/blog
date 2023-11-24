import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
                title="YouTube Video"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={videoUrl}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
