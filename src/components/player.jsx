import React from 'react';
import YouTube from 'react-youtube';

const Player = (props) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const onReady = event => {
        event.target.pauseVideo();
    }
    if (props.videoId) {
        return <YouTube videoId={props.videoId} opts={opts} onReady={onReady} />;
    }
    else {
        return <></>;
    }
};

export default Player;
