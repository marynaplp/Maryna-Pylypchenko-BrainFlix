import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainVideo from "../../components/MainVideo/mainVideo";
import VideoLayout from "../../components/VideoLayout/videoLayout";

const baseUrl = "http://localhost:3010";


const VideoPage = () => {
    const { videoId } = useParams();
    const [videoDetails, setVideoDetails] = useState({ mainVideo: null, sideVideos: [], comments: [] });

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                if (!videoId) {
                    const allVideosResponse = await axios.get(`${baseUrl}/videos`);
                    if (allVideosResponse.data && allVideosResponse.data.length > 0) {
                        const defaultVideo = allVideosResponse.data[0];
                        const videoDetailsResponse = await axios.get(`${baseUrl}/videos/${defaultVideo.id}`);
                        setVideoDetails({
                            mainVideo: videoDetailsResponse.data,
                            sideVideos: allVideosResponse.data.filter(video => video.id !== defaultVideo.id),
                            comments: videoDetailsResponse.data.comments || []
                        });
                    }
                } else {
                    let url = `${baseUrl}/videos/${videoId}`;
                    const response = await axios.get(url);
                    if (response.data) {
                        const sideVideosResponse = await axios.get(`${baseUrl}/videos`);
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
