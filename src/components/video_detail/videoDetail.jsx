import React from 'react';

const VideoDetail = ({video}) => {
    return (
        <>
            <iframe 
                id="ytplayer" 
                type="text/html" 
                width="100%" 
                title="youtube video"
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0" 
                allowFullScreen />
        </>
    );
};

export default VideoDetail;