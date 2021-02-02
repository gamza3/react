import React, { useEffect, useState } from 'react';
import VideoContent from './videoContent';
import Player from './player';
import css from '../css/video.module.css';

const VideoList = (props) => {

    const [videoId, setVideoId] = useState();

    const onPlay = (videoId) => {
        setVideoId(videoId);
    }
    

    return (
        <>
            <Player videoId={videoId}/>
            <ul>
                {
                    props.rs.items.length > 0 ? props.rs.items.map(item=>{
                        const id = typeof item.id == 'string' ? item.id : item.id.videoId;

                        if (id) {
                            return (
                                <VideoContent 
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