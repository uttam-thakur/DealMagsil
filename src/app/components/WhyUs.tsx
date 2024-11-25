import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing a check icon
import styles from "./styles/WhyUs.module.css";

const WhyUs = () => {
  const points = [
    "Wide range of precast concrete products under one roof.",
    "Quality manufacturing and testing as per standards.",
    "Committed to timely delivery.",
    "Technical persons concerned for manufacturing and supervising.",
  ];

  return (
    <div className={styles.whyUsContainer}>
      <h2 className={styles.heading}>Why Choose Us?</h2>
      <div className={styles.gridContainer}>
        {points.map((point, index) => (
          <div key={index} className={styles.gridItem}>
            <FaCheckCircle className={styles.icon} />
            <p className={styles.point}>{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
