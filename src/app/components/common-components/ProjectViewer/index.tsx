"use client";

import cx from "classnames";
import Drawer from "../Drawer";

import styles from "./styles.module.css";
import SecureImage from "../SecureImage/index";
import Portal from "../Portal";

interface Image {
  src: string;
  caption?: string;
}

interface ImageViewerProps {
  images: Image[];
  showProjectView: boolean;
  onClose: any;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  onClose,
  showProjectView,
}) => {
  const getClasses = (currentImageIndex: number) => {
    if (currentImageIndex % 5 === 0) {
      return cx(styles.imageContainer, styles.imageContainerSpan);
    } else {
      return cx(styles.imageContainer, "");
    }
  };
  return (
    <Drawer open={showProjectView} direction="right" maxSize={true}>
      <button
        className={styles.close}
        onClick={() => {
          onClose();
        }}
      >
        X
      </button>

      <div className={styles.imageGallery}>
        <div className={styles.imageGalleryContainer}>
          {images?.map((currentImage, currentImageIndex) => (
            <SecureImage
              key={currentImage.src}
              sizes={
                [1, 2].includes(currentImageIndex)
                  ? "(max-width: 900px) 100vw, 30vw"
                  : "(max-width: 900px) 100vw, 60vw"
              }
              className={getClasses(currentImageIndex)}
              imgSrc={currentImage.src}
              imgAltText={currentImage.caption || ""}
              style={{ objectFit: "cover" }}
              priority={true}
            />
          ))}
        </div>
      </div>
    </Drawer>
  );
};

const ProjectsViewer = Portal(ImageViewer);

export default ProjectsViewer;
