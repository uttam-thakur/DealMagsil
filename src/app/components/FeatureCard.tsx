import React from "react";
import { Typography } from "@mui/material";
import styles from "../components/styles/FeatureCard.module.css";

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
  return (
    <div className={styles.featureCard}>
      <img src={imageSrc} alt={title} className={styles.featureImage} />
      <Typography variant="h6" className={styles.title}>
        {title}
      </Typography>
      <Typography variant="body2" className={styles.description}>
        {description}
      </Typography>
    </div>
  );
};

export default FeatureCard;

// second ui

// const FeatureCard: React.FC<FeatureCardProps> = ({
//   imageSrc,
//   title,
//   description,
// }) => {
//   return (
//     <div className={styles.featureCard}>
//       <img src={imageSrc} alt={title} className={styles.featureImage} />
//       <div className={styles.textContent}>
//         <Typography variant="h6" className={styles.title}>
//           {title}
//         </Typography>
//         <Typography variant="body2" className={styles.description}>
//           {description}
//         </Typography>
//       </div>
//     </div>
//   );
// };

// export default FeatureCard;
