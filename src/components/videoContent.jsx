import React from 'react';
import css from '../css/video.module.css'

const VideoContent = (props) => {
    const title = props.title;
    const thumb = props.thumb;
    const channelTitle = props.channelTitle;

    const onPlay = () => {
        props.onPlay(props.id);
    }

    return (
        <li className={css['video-li']} onClick={onPlay}>
            <img src={thumb.url} width={thumb.width} height={thumb.height} alt=""/>
            <div >
                <p>{title}</p>
                <p>{channelTitle}</p>
            </div>
        </li>
    );
};

export default VideoContent;