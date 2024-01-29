import React, {useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import MainVideo from "../components/MainVideo/mainVideo";
import VideoLayout from "../components/VideoLayout/videoLayout";

const VideoDetailsPage=()=>{

    const {videoId} =useParams ();
    const [video, setVideo]=useState(null)
    //fetch data
    useEffect = () =>{

    }

    return (
        <div>
        {video && <MainVideo video={video} /> }
        <VideoLayout 
        mainVideo={video}
        sideVideos={video}// fetch or flter 
        comments={video?.comments}
        />
        </div>
    )

}
export default VideoDetailsPage;