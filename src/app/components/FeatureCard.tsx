import React, { useState } from "react";
import Modal from "./common-components/Modal";
import { Typography } from "@mui/material";
import styles from "../components/styles/FeatureCard.module.css";
import Image from "next/image";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsInfo } from "react-icons/bs";

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  const [showProductInfo, setShowProductInfo] = useState(false);

  const openDetails = () => {
    setShowProductInfo(true);
  };

  const closeDetails = () => {
    setShowProductInfo(false);
  };

  return (
    <>
      <div className={styles.featureCard}>
        <button className={styles.info} onClick={openDetails}>
          {/* <FontAwesomeIcon icon={faInfoCircle} size="2x" /> */}
          <BsInfo size={20} />
        </button>
        <Image
          height={100}
          width={100}
          src={imageSrc}
          alt={title}
          className={styles.featureImage}
        />
        <div className={styles.featureDiv}>
          <Typography variant="h6" className={styles.title}>
            {title}
          </Typography>

          <Typography variant="body2" className={styles.description}>
            {description}
          </Typography>
        </div>
      </div>

      <Modal open={showProductInfo} onBackdropClick={closeDetails}>
        <div className={styles.featuresDetails}>
          <button className={styles.featureClose} onClick={closeDetails}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
          <Image
            width={420}
            height={220}
            alt={"title"}
            src={imageSrc}
            className={styles.featureModalImage}
          />

          <div>
            <Typography variant="h2" className={styles.featuresTitle}>
              {title}
            </Typography>
            <Typography variant="h2" className={styles.featuresDescription}>
              {description}
            </Typography>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FeatureCard;
