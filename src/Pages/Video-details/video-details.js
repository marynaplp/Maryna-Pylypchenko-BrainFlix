import React, {useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import MainVideo from "../../components/MainVideo/mainVideo";
import VideoLayout from "../../components/VideoLayout/videoLayout";

const baseUrl = "http://localhost:3010";


const VideoDetails=()=>{
 
    const {videoId} =useParams ();
    const [videoDetails, setVideoDetails]=useState(null)
    //fetch data
    useEffect(() => {
        const fetchVideosDetails = async () => {
          const response = await axios.get(`${baseUrl}/videos`)
          setVideoDetails(response.data);
    
        };
    
        fetchVideosDetails();
      }, [videoId]);

    return (
        <div>
         <MainVideo video={videoDetails.mainVideo} /> 
        <VideoLayout 
        mainVideo={videoDetails.mainVideo}
        sideVideos={videoDetails.sideVideos}
        comments={videoDetails.comments}
        />
        </div>
    )

}
export default VideoDetails;