import styled from "styled-components";
import { useState } from "react";

type ImageData = {
  src: string;
  caption: string;
};

type ImageCarouselProps = {
  images: ImageData[];
};

const ProjectCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const imagesPerGroup = 5;
  const numberOfButtons = Math.ceil(images.length / imagesPerGroup);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleRadioChange = (index: number) => {
    setCurrentSlide(index);
    const carousel = document.getElementById("carousel")!;
    const scrollPosition = (carousel.scrollWidth / numberOfButtons) * index;
    carousel.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  return (
    <>
      <CarouselContainer id="carousel">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img src={image.src} alt={`Project ${index + 1}`} />
            <Caption>{image.caption}</Caption>
          </CarouselItem>
        ))}
      </CarouselContainer>

      <RadioButtons>
        {Array.from({ length: numberOfButtons }).map((_, index) => (
          <RadioInput
            key={index}
            type="radio"
            name="carousel"
            checked={currentSlide === index}
            onChange={() => handleRadioChange(index)}
          />
        ))}
      </RadioButtons>
    </>
  );
};

export default ProjectCarousel;

// Styled Components

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  gap: 20px; /* Padding between images */

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar */
  }
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: calc(20% - 20px); /* 5 images per row by default */
  scroll-snap-align: start;
  transition: transform 0.3s ease;
  position: relative;

  img {
    width: 100%;
    height: 200px; /* Fixed height to make all images the same size */
    object-fit: cover; /* Ensures uniform image size while maintaining aspect ratio */
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer; /* Makes image clickable */

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px); /* 2 images per row on tablets */
    img {
      height: 150px; /* Smaller height for tablet view */
    }
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px); /* 1 image per row on mobile */
    img {
      height: 120px; /* Adjust height for mobile screens */
    }
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
`;

// Modal Styles

const RadioButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 480px) {
    margin-top: 5px; /* Reduce margin for mobile screens */
  }
`;

const RadioInput = styled.input`
  margin: 0 5px;
  accent-color: red; /* Styling for radio buttons */

  @media (max-width: 480px) {
    display: none;
    margin: 0 2px; /* Reduce spacing between buttons on mobile */
  }
`;
