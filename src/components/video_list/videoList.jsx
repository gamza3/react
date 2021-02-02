import React, { useEffect, useState } from 'react';
import VideoItem from '../video_item/videoItem';
// import Player from './player';
// import css from '../css/video.module.css';
import css from './video_list.module.css';

const VideoList = (props) => {

    const [videoId, setVideoId] = useState();

    const onPlay = (videoId) => {
        setVideoId(videoId);
    }
    

    return (
        <>
            {/* <Player videoId={videoId}/> */}
            <ul className={css.videos}>
                {
                    props.videos.length > 0 ? props.videos.map(item=>{
                        return (
                            <VideoItem 
                                video={item}
                                id={item.id}
                                key={item.id} 
                                title={item.snippet.title}
                                thumb={item.snippet.thumbnails.default}
                                channelTitle={item.snippet.channelTitle}
                                onPlay={onPlay}
                            />
                        );
                       
                    }) : ''
                }
            </ul>
        </>
    );
};

export default VideoList;