import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainVideo from "../../components/MainVideo/mainVideo";
import VideoLayout from "../../components/VideoLayout/videoLayout";

const baseUrl = "https://project-2-api.herokuapp.com";
const apiKey = "b805ee35-d867-433e-ae3e-5d300727a840";

const VideoPage = () => {
    const { videoId } = useParams();
    const [videoDetails, setVideoDetails] = useState({ mainVideo: null, sideVideos: [], comments: [] });

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                if (!videoId) {
                    // Fetch the list of all videos to find a default video when videoId is not present
                    const allVideosResponse = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
                    if (allVideosResponse.data && allVideosResponse.data.length > 0) {
                        const defaultVideo = allVideosResponse.data[0];
                        const videoDetailsResponse = await axios.get(`${baseUrl}/videos/${defaultVideo.id}?api_key=${apiKey}`);
                        setVideoDetails({
                            mainVideo: videoDetailsResponse.data,
                            sideVideos: allVideosResponse.data.filter(video => video.id !== defaultVideo.id),
                            comments: videoDetailsResponse.data.comments || []
                        });
                    }
                } else {
                    // Fetch video details for a specific videoId
                    let url = `${baseUrl}/videos/${videoId}?api_key=${apiKey}`;
                    const response = await axios.get(url);
                    if (response.data) {
                        const sideVideosResponse = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
                        const filteredSideVideos = sideVideosResponse.data.filter(video => video.id !== videoId);

                        setVideoDetails({
                            mainVideo: response.data,
                            sideVideos: filteredSideVideos,
                            comments: response.data.comments || []
                        });
                    }
                }
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchVideoData();
    }, [videoId]);

    if (!videoDetails.mainVideo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <MainVideo video={videoDetails.mainVideo} />
            <VideoLayout
                mainVideo={videoDetails.mainVideo}
                sideVideos={videoDetails.sideVideos}
                comments={videoDetails.comments}
            />
        </div>
    );
};

export default VideoPage;
