import axios from "axios";
import React, {useEffect, useState} from 'react';
import MainVideo from "../../components/MainVideo/mainVideo";
import VideoLayout from "../../components/VideoLayout/videoLayout";


const baseUrl ="https://project-2-api.herokuapp.com"

const Home=()=>{
 const [videos, setVideos] = useState([]);
const [mainVideo, setMainVideo]=useState(null);

useEffect =(() =>{
const fetchVideos= async ()=>{
    const response =await axios.get(baseUrl)
    setVideos(response.data);
    setMainVideo(response.data[0]);

}
fetchVideos()
}, [])
return (
    <div>
        {mainVideo && <MainVideo video={mainVideo} /> }
        <VideoLayout 
        mainVideo={mainVideo}
        sideVideos={videos}
        comments={mainVideo?.comments}
        />
    </div>
)
}
export default Home;