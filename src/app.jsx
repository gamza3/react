import './app.css';
import React, {useEffect, useState} from 'react';
import Search from './components/search'
// import VideoList from './components/videoList'
import VideoList from './components/video_list/videoList'


function App() {
  const [rs, setRs] = useState({items: []});
  const [url, setUrl] = useState(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAb4PGHp8MqhdTfTpF_ukV5WlF7Shb0GlM`);
  const [keyword, setKeyword] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
      const requestOptions = {
          method: 'GET',
          redirect: 'follow'
      };

      fetch(url, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(result => {
            setVideos(result.items);
        })
        .catch(error => console.log('error', error));
  }, []);

  const handleSubmit = searchTxt => {
      if (searchTxt != '') {
          setKeyword(searchTxt);
          setUrl(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTxt}&key=AIzaSyAb4PGHp8MqhdTfTpF_ukV5WlF7Shb0GlM`);
      }
      else {
          setKeyword('');
          setUrl(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAb4PGHp8MqhdTfTpF_ukV5WlF7Shb0GlM`);
      }
  }

  useEffect(()=>{
      // e.preventDefault();
      const requestOptions = {
          method: 'GET',
          redirect: 'follow'
      };

      fetch(url, requestOptions)
          .then(response => {
              return response.json();
          })
          .then(result => {
              setRs(result);
          })
          .catch(error => console.log('error', error));

  }, [keyword]);

  return (
    <>
      <Search onSubmit={handleSubmit}/>
      {/* <VideoList rs={rs}/> */}
      <VideoList videos={videos}/>
    </>
  );
}

export default App;
