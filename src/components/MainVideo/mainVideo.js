import "./mainVideo.css";
import likeIcon from "../../Assets/Icons/likes.svg";
import viewIcon from "../../Assets/Icons/views.svg"


const MainVideo =({ video })=>{
  return (
    <div className="main-video">
      <video
        className="main-video__player"
        controls
        poster={video.image}
      >
        <source src={video.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="main-video__info">
      
        <h1 className="main-video__title">{video.title}</h1>
        <div className="main-video__divider"></div>
        <div className="main-video__information">
        <div className="main-video__intro ">
        <p className="main-video__channel"> By {video.channel}</p>
        <p className="main-video__date">  {new Date(video.timestamp).toLocaleDateString('en-US', {
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
      </div>
    </div>
  );
}

export default MainVideo
