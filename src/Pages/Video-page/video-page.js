import React, {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import MainVideo from "../../components/MainVideo/mainVideo";
import VideoLayout from "../../components/VideoLayout/videoLayout";

const baseUrl ="https://project-2-api.herokuapp.com"
const apiKey ="b805ee35-d867-433e-ae3e-5d300727a840";

const VideoPage =()=>{

const {videoId} =useParams()
const [videoDetails, setVideoDetails] = useState({ mainVideo: null, sideVideos: [], comments: [] });

useEffect(() => {
    const fetchVideoData = async () => {
        try{
            let url=`${baseUrl}/videos`;
            if(videoId){
                url +=`/${videoId}`;
            }
            url +=`?api_key= ${apiKey}`;
                     
            const  response= await axios.get(url);

            if((response.data && response.data.length > 0)) {
            setVideoDetails({
                 mainVideo: response.data[0],
                  sideVideos: response.data.slice(1),
                   comments: response.data[0].comments });
            }else{
                const mainVideo = response.data;
                const responseAllVideos = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);

          const filteredSideVideos = responseAllVideos.data.filter((video) => video.id !== videoId);

                setVideoDetails({ 
                    mainVideo: response.data, 
                    sideVideos: filteredSideVideos,
                     comments:  response.data.comments});

            }

        }catch(error){
console.log("Error", error)
        }
      
    };

    fetchVideoData();
  }, [videoId]);

  if (!videoDetails.mainVideo) {
    return <div>Loading...</div>;
  }
  const comments = videoDetails.comments || [];
return(
    <div>
        <MainVideo video ={videoDetails.mainVideo}  />
        <VideoLayout 
        mainVideo ={videoDetails.mainVideo} 
        sideVideos={videoDetails.sideVideos}  
        comments={videoDetails.comments}
        />
    </div>
)
}

export default VideoPage 