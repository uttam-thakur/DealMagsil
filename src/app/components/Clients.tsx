import React, { useEffect } from "react";
import styles from "../../app/components/styles/Client.module.css";

const Client = () => {
  useEffect(() => {
    const updateSlideWidth = () => {
      const slideWidth =
        window.innerWidth <= 480 ? 150 : window.innerWidth <= 768 ? 200 : 250;
      document.documentElement.style.setProperty(
        "--slide-width",
        `${slideWidth}px`
      );
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);

    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {Array.from({ length: 7 }, (_, index) => (
          <div className={styles.slide} key={index}>
            <img
              className={styles.image}
              src={`/images/clients/${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
        {Array.from({ length: 7 }, (_, index) => (
          <div className={styles.slide} key={index + 7}>
            <img
              className={styles.image}
              src={`/images/clients/${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
