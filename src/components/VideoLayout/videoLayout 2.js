import React from "react";
import MainVideoDetails from "../MainVideoDetails/mainVideoDetails";
import SideVideos from "../SideVideos/sideVideos";
import CommentsSection from "../CommentSection/CommentsSection";
import './videoLayout.css';

const VideoLayout =({mainVideo, sideVideos, comments})=>{
    return(
    <div className="video-layout">
        <div className="video-layout__main">
            <MainVideoDetails video={mainVideo} />
            <CommentsSection comments={comments} />
        </div>
        <div className="video-layout__divider"></div>
<div className ="video-layout__sidebar">
    <SideVideos videos={sideVideos} mainVideoId ={mainVideo.id} />
</div>
    </div>
    )
}
export default VideoLayout