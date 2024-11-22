import React from "react";
import ProjectCarousel from "../../ProjectCarousel/index";
import styles from "./styles.module.css";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineProduct } from "react-icons/ai";

type ImageData = {
  src: string;
  caption: string;
};

interface ProjectSliderProps {
  images: ImageData[];
  name: string;
  title: any;
  onClick: any;
  products: string[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({
  images,
  name,
  title,
  onClick,
  products,
}) => {
  return (
    <div className={styles.projectSlider}>
      <ProjectCarousel images={images} />
      <div
        className={styles.projectDetails}
        onClick={() => {
          onClick({ images, name, title });
        }}
      >
        <h1 className={styles.projectName}>{name}</h1>

        <div className={styles.projectDetaillsSections}>
          <AiOutlineProduct
            className={styles.projectDetaillsSectionsIcon}
            size={20}
            color="#000000"
          />
          <h1 className={styles.projectTitle}>{products.join(", ")}</h1>
        </div>
        <div className={styles.projectDetaillsSections}>
          <AiOutlineClockCircle
            className={styles.projectDetaillsSectionsIcon}
            size={20}
            color="#000000"
          />
          <h1 className={styles.projectTitle}>{"25/06/2022 - 24/02/2024"}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
