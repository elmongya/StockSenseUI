import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import axios from "axios";
import Header from "../../components/Header";
import "./Learn.css";

const Learn = () => {
  const [videos, setVideos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const videoLinks = [
    "https://www.youtube.com/watch?v=QFWgJSR5QGY",
    "https://www.youtube.com/watch?v=WtNv1U4g44M",
  ];

  const videoIds = videoLinks.map((link) => link.split("v=")[1]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
      const videoDetails = await Promise.all(
        videoIds.map(async (id) => {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`
          );
          return response.data.items[0].snippet;
        })
      );
      setVideos(videoDetails);
    };

    fetchVideoDetails();
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const getVideoParams = (index) => {
    const baseParams = "modestbranding=1&rel=0&controls=1&showinfo=0&playsinline=1&fs=0&disablekb=1&iv_load_policy=3";
    const autoplay = index === activeIndex ? "autoplay=1" : "autoplay=0";
    const loopParams = `loop=1&playlist=${videoIds[index]}`;
    return `${baseParams}&${autoplay}&${loopParams}`;
  };

  return (
    <div className="learn-container">
      <Header />
      <Swiper
        ref={swiperRef}
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => setActiveIndex(0)}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="video-section">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube-nocookie.com/embed/${videoIds[index]}?${getVideoParams(index)}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="navigation-buttons">
        <button className="swiper-button-prev">
        </button>
        <button className="swiper-button-next">
        </button>
      </div>
    </div>
  );
};

export default Learn;
