import "./mainVideo.css";



const MainVideo =({ video })=>{
  return (
    <div className="main-video1">
      <video
        className="main-video1__player"
        controls
        poster={video.image}
      >
        <source src={video.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>
  );
}

export default MainVideo
