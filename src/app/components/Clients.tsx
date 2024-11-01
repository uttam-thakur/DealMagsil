import React from "react";
import styles from "../../app/components/styles/Client.module.css";

const Client: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {Array.from({ length: 7 }, (_, index) => (
          <div className={styles.slide} key={index}>
            <img
              src={`/images/clients/${index + 1}.jpg`} // Using image from public folder
              height="100"
              width="250"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
        {/* Duplicate slides for infinite scrolling effect */}
        {Array.from({ length: 7 }, (_, index) => (
          <div className={styles.slide} key={index + 7}>
            <img
              src={`/images/clients/${index + 1}.jpg`} // Using image from public folder
              height="100"
              width="250"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
