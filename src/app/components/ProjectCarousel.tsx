import SecureImage from "../components/common-components/SecureImage/index";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./styles/projectcarousel.module.css";

import {
  Keyboard,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";

type ImageData = {
  src: string;
  caption: string;
};

type ImageCarouselProps = {
  images: ImageData[];
  imageClassName?: String;
};

const ProjectCarousel: React.FC<ImageCarouselProps> = ({
  images,
  imageClassName = "",
}) => {
  return (
    <div className={styles.projectImageContainer}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.projectImageSlider}>
            <SecureImage
              imgSrc={image.src}
              objectfit="cover"
              className={styles.projectImage}
              imgAltText={`Slide-${index + 1}`}
              sizes="(max-width: 900px) 320px, 440px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
