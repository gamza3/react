import React, { useEffect, useState } from 'react';
import VideoItem from '../video_item/videoItem';
// import Player from './player';
// import css from '../css/video.module.css';

const VideoList = (props) => {

    const [videoId, setVideoId] = useState();

    const onPlay = (videoId) => {
        setVideoId(videoId);
    }
    

    return (
        <>
            {/* <Player videoId={videoId}/> */}
            <ul>
                {
                    props.videos.length > 0 ? props.videos.map(item=>{
                        const id = typeof item.id == 'string' ? item.id : item.id.videoId;

                        if (id) {
                            return (
                                <VideoItem 
                                    video={item}
                                    id={id}
                                    key={id} 
                                    title={item.snippet.title}
                                    thumb={item.snippet.thumbnails.default}
                                    channelTitle={item.snippet.channelTitle}
                                    onPlay={onPlay}
                                />
                            );
                        }
                    }) : ''
                }
            </ul>
        </>
    );
};

export default VideoList;