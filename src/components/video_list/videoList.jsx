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
                                key={item.id} 
                                onVideoClick={props.onVideoClick}
                            />
                        );
                       
                    }) : ''
                }
            </ul>
        </>
    );
};

export default VideoList;