import './app.css';
import React, {useEffect, useState} from 'react';
import Search from './components/search'
// import VideoList from './components/videoList'
import VideoList from './components/video_list/videoList'

import SearchHeader from './components/search_header/searchHeader';


function App({youtube}) {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
      youtube
        .mostPopular()//
        .then(videos=>setVideos(videos));
  }, []);

  const handleSubmit = searchTxt => {
      youtube
        .search(searchTxt)//
        .then(videos=>setVideos(videos));
  }


  return (
    <>
      <SearchHeader onSubmit={handleSubmit}/>
      {/* <Search onSubmit={handleSubmit}/> */}
      {/* <VideoList rs={rs}/> */}
      <VideoList videos={videos}/>
    </>
  );
}

export default App;
