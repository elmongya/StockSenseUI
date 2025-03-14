import React, { useState, useRef } from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/swiper-bundle.css";
  import { Navigation } from "swiper/modules";
  import Header from "../../components/Header";
  import "./Learn.css";
  
  const Learn = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
  
    const videoLinks = [
      "https://www.youtube.com/watch?v=QFWgJSR5QGY",
      "https://www.youtube.com/watch?v=WtNv1U4g44M",
      "https://www.youtube.com/watch?v=VSzwp39tr_Y",
      "https://www.youtube.com/watch?v=0zL0B1hqZos",
      "https://www.youtube.com/watch?v=3ReDyrNEHDU",
      "https://www.youtube.com/watch?v=WtNv1U4g44M",
      "https://www.youtube.com/watch?v=uGhH-EKCE8s",
      "https://www.youtube.com/watch?v=r03DtnyicjE",
      "https://www.youtube.com/watch?v=LjBRBNBAmE0",
      "https://www.youtube.com/watch?v=WugxR5ejl6U",
      "https://www.youtube.com/watch?v=CHpV1um3qSE",
      "https://www.youtube.com/watch?v=xDp4G5ru_JI"
    ];
  
    const videoIds = videoLinks.map((link) => link.split("v=")[1]);
  
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
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setActiveIndex(0)}
        >
          {videoIds.map((id, index) => (
            <SwiperSlide key={index}>
              <div className="video-section">
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${id}?${getVideoParams(index)}`}
                    title="Stock Education Video"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
        <div className="navigation-buttons">
          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>
        </div>
      </div>
    );
  };
  
  export default Learn;