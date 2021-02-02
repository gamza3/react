import './app.css';
import css from './components/video_detail/video_detail.module.css';
import React, {useEffect, useState} from 'react';
// import Search from './components/search'
// import VideoList from './components/videoList'
import VideoList from './components/video_list/videoList'

import SearchHeader from './components/search_header/searchHeader';
import VideoDetail from './components/video_detail/videoDetail'

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);



  const selectVideo = video => {
      setSelectedVideo(video);
  }

  const initPage = () => {
      youtube
        .mostPopular()//
        .then(videos=>setVideos(videos));
  }

  const handleSubmit = searchTxt => {
      setSelectedVideo(null);

      if (searchTxt.replace(/\s/g, '') != '') {
          youtube
            .search(searchTxt)//
            .then(videos=>setVideos(videos));
      }
      else {
          initPage();
      }
  }

  useEffect(initPage, []);

  return (
    <>
      <SearchHeader onSubmit={handleSubmit}/>
      <section className={css.content}>
          <div className={css.detail}>
              {selectedVideo && <VideoDetail video={selectedVideo}/>}
          </div>
          <div className={css.list}>
              <VideoList videos={videos} onVideoClick={selectVideo}/>
          </div>
      </section>
    </>
  );
}

export default App;
