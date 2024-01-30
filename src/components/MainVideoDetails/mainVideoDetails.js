import "./mainVideoDetails.css"

import likeIcon from "../../Assets/Icons/likes.svg";
import viewIcon from "../../Assets/Icons/views.svg"
const MainVideoDetails =({video})=>{
    return(
        <>
        <section className="main-video">
      
        <h1 className="main-video__title">{video.title}</h1>
        <div className="main-video__divider"></div>
        <div className="main-video__information">
        <div className="main-video__intro ">
        <p className="main-video__channel"> By {video.channel}</p>
        <p className="main-video__date">  {new Date(Number(video.timestamp)).toLocaleDateString('en-US', {
       day: '2-digit',
    month: '2-digit',
    year: 'numeric',
 
  })} </p>
  </div>

  <div class="main-video__details">
        <p className="main-video__views"> 
        <img src={viewIcon} alt="View Icon" className="main-video__viewIcon" /> 

         {video.views}</p>
        <p className="main-video__likes">  
        <img src={likeIcon} alt="Like Icon" className="main-video__likeIcon" /> 
        {video.likes}</p>
        </div>
        </div>
        <div className="main-video__divider"></div>

        <p className="main-video__description">{video.description}</p>
      </section>
      </>
    )
}

export default MainVideoDetails;