import React, { useState, useEffect } from "react";
import "./videoUpload.css";
const VideoUpload = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const videoData = {
        id: "1",
        title: " Video",
        description: "This is a simple video description.",
        image: "/images/image3.jpeg",
      };
      setVideo(videoData);
    };

    fetchVideoData();
  }, []);

  if (!video) {
    return <div>Loading video data...</div>;
  }

  const handleTitleChange = (e) => setVideoTitle(e.target.value);
  const handleDescriptionChange = (e) => setVideoDescription(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("handleSubmit called");

    const formData = new FormData();
    formData.append("title", videoTitle);
    formData.append("description", videoDescription);

    console.log("Submitting video data:", formData);

    try {
      const response = await fetch("http://localhost:3010/videos", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Video Uploaded Successfully!");
        window.location.href = "/";
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Failed to upload video.");
    }
  };

  return (
    <section className="video-upload">
      <main className="video-upload__main">
        <div className="video-upload__divider"></div>
        <h1 className="video-upload__title">Upload Video</h1>
        <div className="video-upload__divider"></div>

        <form className="video-upload__form" onSubmit={handleSubmit}>
          <div class="video-upload__inputs">
            <div className="video-upload__thumbnail-section">
              <div class="video-upload__thumbnail__title">VIDEO THUMBNAIL </div>
              <div
                className="video-upload__thumbnail"
                style={{
                  backgroundImage: `url(http://localhost:3010${video.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "200px",
                  width: "100%",
                }}
              ></div>
            </div>

            <div className="video-upload__section">
              <div className="video-upload__field">
                <div class="video__title">TITLE YOUR VIDEO</div>
                <input
                  type="text"
                  id="videoTitle"
                  name="videoTitle"
                  placeholder="Add a title to your video"
                  value={videoTitle}
                  onChange={handleTitleChange}
                />
              </div>

              <div className="video-upload__field">
                <div class="video__description">ADD A VIDEO DESCRIPTION</div>
                <textarea
                  id="videoDescription"
                  name="videoDescription"
                  placeholder="Add a description to your video"
                  value={videoDescription}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
          </div>
          <div className="video-upload__divider"></div>

          <div className="video-upload__buttons">
            <button type="submit" className="video-upload__publish-btn1">
              PUBLISH
            </button>
            <button type="button" className="video-upload__cancel-btn">
              CANCEL
            </button>
            <button type="submit" className="video-upload__publish-btn">
              PUBLISH
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};
export default VideoUpload;
