import './App.css';
import React,{useState, useEffect} from "react"
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/mainVideo';

import VideoLayout from './components/VideoLayout/videoLayout';
import videoDetailsData from "./Data/video-details.json";
import videosData from "./Data/videos.json";

function App() {
  const [videos, setVideos] = useState([]);
  const [mainVideo, setMainVideo]=useState(null);

  useEffect(()=>{
    setVideos(videosData);
    const initialMainVideo=videoDetailsData.find(detail =>detail.id === videosData[0].id) 
   // console.log("Main video set:", initialMainVideo);
    setMainVideo(initialMainVideo)
  }, [])

  return (
    <div>
      <Header />
      {mainVideo && <MainVideo video={mainVideo} />}
      
      {mainVideo && 
        <VideoLayout
          mainVideo={mainVideo}
          sideVideos={videos}
          comments={mainVideo.comments}
        />
      }

    </div>
  );
}

export default App;
