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
  title: any;
  onClick: any;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({
  images,
  name,
  title,
  onClick,
}) => {
  return (
    <div className={styles.projectSlider}>
      <h1 className={styles.projectTitle}>{title}</h1>
      <ProjectCarousel images={images} />
      <div
        className={styles.projectDetails}
        onClick={() => {
          onClick({ images, name, title });
        }}
      >
        <h1 className={styles.projectName}>{name}</h1>
      </div>
    </div>
  );
};

export default ProjectSlider;
