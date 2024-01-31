import react from "react";
import "./videoUpload.css"

const VideoUpload=()=>{
 return(
  <section className="video-upload">

  
  <main className="video-upload__main">
  <div className="video-upload__divider"></div>

    <h1 className="video-upload__title">Upload Video</h1>
    <div className="video-upload__divider"></div>
<div class="video-upload__main1">
    <form className="video-upload__form" >
      <div className="video-upload__thumbnail-section">
        <div class="video-upload__thumbnail__title">VIDEO THUMBNAIL </div>
        <div className="video-upload__thumbnail">
        </div>
      </div>
      <div className="video-upload__sections">

      <div className="video-upload__field">
        <div class="video__title">TITLE YOUR VIDEO</div>
        <input 
          type="text" 
          id="videoTitle" 
          name="videoTitle" 
          placeholder="Add a title to your video" 
        />
      </div>
      
      <div className="video-upload__field">
     <div class="video__description">ADD A VIDEO DESCRIPTION</div>
        <textarea 
          id="videoDescription" 
          name="videoDescription" 
          placeholder="Add a description to your video"
        />
      </div>
      </div>
      </form>
      <div className="video-upload__divider"></div>

      <div className="video-upload__buttons">
        <button type="submit" className="video-upload__publish-btn1">PUBLISH</button>
        <button type="button" className="video-upload__cancel-btn">CANCEL</button>
        <button type="submit" className="video-upload__publish-btn">PUBLISH</button>

      </div>
   
    </div>
  </main>
</section>
 )
}
export default VideoUpload;