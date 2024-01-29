import react from "react";
import Header from "../../components/Header/Header"
import "./videoUpload.css"

const VideoUpload=()=>{
 return(
  <div className="video-upload">
  <Header />
  
  <main className="video-upload__main">
    <h1 className="video-upload__title">Upload Video</h1>
    
    <form className="video-upload__form" >
      <div className="video-upload__thumbnail-section">
        <label htmlFor="videoThumbnail">VIDEO THUMBNAIL</label>
        <div className="video-upload__thumbnail">
        </div>
      </div>
      
      <div className="video-upload__field">
        <label htmlFor="videoTitle">TITLE YOUR VIDEO</label>
        <input 
          type="text" 
          id="videoTitle" 
          name="videoTitle" 
          placeholder="Add a title to your video" 
        />
      </div>
      
      <div className="video-upload__field">
        <label htmlFor="videoDescription">ADD A VIDEO DESCRIPTION</label>
        <textarea 
          id="videoDescription" 
          name="videoDescription" 
          placeholder="Add a description to your video"
        />
      </div>
      
      <div className="video-upload__buttons">
        <button type="submit" className="video-upload__publish-btn">PUBLISH</button>
        <button type="button" className="video-upload__cancel-btn">CANCEL</button>
      </div>
    </form>
  </main>
</div>
 )
}
export default VideoUpload;