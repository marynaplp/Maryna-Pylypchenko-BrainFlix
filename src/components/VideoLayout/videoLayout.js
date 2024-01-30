import React from "react";
import MainVideoDetails from "../MainVideoDetails/mainVideoDetails";
import SideVideos from "../SideVideos/sideVideos";
import CommentsSection from "../CommentSection/CommentsSection";
import './videoLayout.css';

const VideoLayout =({mainVideo, sideVideos, comments, onVideoSelect})=>{
    return(
    <div className="video-layout">
        <div className="video-layout__main">
            <MainVideoDetails 
            video={mainVideo} />
            <CommentsSection 
            comments={comments} />
        </div>
        <div className="video-layout__divider"></div>
<div className ="video-layout__sidebar">
{mainVideo &&
    <SideVideos 
    videos={sideVideos} 
    mainVideoId ={mainVideo.id} 
    onVideoSelect={onVideoSelect} />
}
</div>
    </div>
    )
}
export default VideoLayout