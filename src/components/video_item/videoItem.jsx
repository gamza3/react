import React from 'react';
import css from './video_item.module.css';

const VideoItem = ({video, video: {snippet}, onVideoClick}) => {
    return (
        <li className={css.container} onClick={()=>{onVideoClick(video)}}>
            <div className={css.video}>
                <img className={css.thumb} src={snippet.thumbnails.medium.url} alt="video thumb"/>
                <div className={css.metadata}>
                    <p className={css.title}>{snippet.title}</p>
                    <p className={css.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;
