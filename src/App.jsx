import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [videoQuery, setVideoQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const unsplashAccessKey = "yDTJiuQrvQ_ylZYZfOHP-s4mjXybXau4SVp_HCp1hhM";
  const pexelsApiKey =
    "3Wx8G8Z7wmR3ApmzSHEzvfKubeDrZCJjGE9uF7BwUnoRkAXnPCPW4w6G";

  // Unsplash Image Search
  const searchImages = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query, per_page: 3 },
          headers: { Authorization: `Client-ID ${unsplashAccessKey}` },
        },
      );
      setImages(response.data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Pexels Video Search
  const searchVideos = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://api.pexels.com/videos/search", {
        params: { query: videoQuery, per_page: 3 },
        headers: { Authorization: pexelsApiKey },
      });
      setVideos(response.data.videos);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="app-container">
      <section className="search-section">
        <h1>Image & Video Search</h1>

        {/* Image Search */}
        <form onSubmit={searchImages} className="form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for images..."
            className="input"
          />
          <button type="submit" className="button">
            Search Images
          </button>
        </form>

        <div className="grid">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              className="media"
            />
          ))}
        </div>

        {/* Video Search */}
        <form onSubmit={searchVideos} className="form">
          <input
            type="text"
            value={videoQuery}
            onChange={(e) => setVideoQuery(e.target.value)}
            placeholder="Search for videos..."
            className="input"
          />
          <button type="submit" className="button">
            Search Videos
          </button>
        </form>

        <div className="grid">
          {videos.map((video) => (
            <video key={video.id} controls className="media">
              <source src={video.video_files[0]?.link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
