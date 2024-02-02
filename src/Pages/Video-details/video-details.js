import React, {useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import MainVideo from "../../components/MainVideo/mainVideo";
import VideoLayout from "../../components/VideoLayout/videoLayout";

const baseUrl ="https://project-2-api.herokuapp.com"
const apiKey ="b805ee35-d867-433e-ae3e-5d300727a840";

const VideoDetails=()=>{
 
    const {videoId} =useParams ();
    const [videoDetails, setVideoDetails]=useState(null)
    //fetch data
    useEffect(() => {
        const fetchVideosDetails = async () => {
          const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`)
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