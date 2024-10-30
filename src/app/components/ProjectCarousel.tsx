import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "../components/styles/projectcarousel.module.css"; // Import the CSS module

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

type ImageData = {
  src: string;
  caption: string;
};

type ImageCarouselProps = {
  images: ImageData[];
};

const ProjectCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div id="app">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className={styles.swiperContainer} // Apply the swiper container style
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className={styles.swiperSlideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
