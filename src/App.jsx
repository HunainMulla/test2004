import React, { useState } from "react";
import axios from "axios";
import "./ChildA.css";

const ChildA = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const apiKey = "3Wx8G8Z7wmR3ApmzSHEzvfKubeDrZCJjGE9uF7BwUnoRkAXnPCPW4w6G";

  const searchVideos = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://api.pexels.com/videos/search", {
        params: { query, per_page: 6 },
        headers: { Authorization: apiKey },
      });
      setVideos(response.data.videos);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="childA-container">
      <h1 className="childA-title">Pexels Video Search</h1>
      <form onSubmit={searchVideos} className="childA-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for videos..."
          className="childA-input"
        />
        <button type="submit" className="childA-button">
          Search
        </button>
      </form>
      <div className="video-grid">
        {videos.map((video) => (
          <video key={video.id} controls className="childA-video">
            <source src={video.video_files[0]?.link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default ChildA;
