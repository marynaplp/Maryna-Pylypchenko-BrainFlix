import axios from "axios";
import React, { useState, useEffect } from 'react';
import MainVideo from "../../components/MainVideo/mainVideo";
import VideoLayout from "../../components/VideoLayout/videoLayout";
import CommentsSection from "../../components/CommentSection/CommentsSection";

const baseUrl ="https://project-2-api.herokuapp.com"
const apiKey ="b805ee35-d867-433e-ae3e-5d300727a840";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [mainVideo, setMainVideo] = useState(null);

  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
        const videosData = response.data;
        setVideos(videosData);
        const videoDetailsResponse = await axios.get(`${baseUrl}/videos/${videosData[0].id}?api_key=${apiKey}`);
        const initialMainVideo = videoDetailsResponse.data;
        setMainVideo(initialMainVideo);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchAllVideos();
  }, []);

  const handleVideoSelect = async (videoId) => {
    try {
      const response = await axios.get(`${baseUrl}/videos/${videoId}?api_key=${apiKey}`);
      setMainVideo(response.data);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  return (
    <div>
      {mainVideo ? (
        <>
          <MainVideo video={mainVideo} />
          <VideoLayout
            mainVideo={mainVideo}
            sideVideos={videos.filter(video => video.id !== mainVideo.id)}
            comments={mainVideo.comments}
            onVideoSelect={handleVideoSelect} 
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
