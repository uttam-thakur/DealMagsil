import React from "react";
import ProjectCarousel from "../../ProjectCarousel/index";
import styles from "./styles.module.css";

type ImageData = {
  src: string;
  caption: string;
};

interface ProjectSliderProps {
  images: ImageData[];
  name: string;
  onClick: any;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({
  images,
  name,
  onClick,
}) => {
  return (
    <div className={styles.projectSlider}>
      <ProjectCarousel images={images} />
      <div
        className={styles.projectDetails}
        onClick={() => {
          onClick({ images, name });
        }}
      >
        <h1 className={styles.projectName}>{name}</h1>
      </div>
    </div>
  );
};

export default ProjectSlider;
