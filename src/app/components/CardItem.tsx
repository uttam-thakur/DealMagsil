// import * as React from "react";
// import { Card, Typography } from "@mui/material";
// import Image, { StaticImageData } from "next/image";
// import styles from "../components/styles/welcomeCard.module.css";
// import Welcome from "../../../public/images/welcome.jpg";
// import QualityAss from "../../../public/images/quality1.png";

// interface WelcomeCardProps {
//   title?: string;
//   image: StaticImageData;
//   description: string;
// }

// const WelcomeCard: React.FC<WelcomeCardProps> = ({
//   title,
//   image,
//   description,
// }) => {
//   return (
//     <div className={styles.main}>
//       <Card className={styles.card} sx={{ boxShadow: "none", padding: 0 }}>
//         <Typography gutterBottom variant="h4" component="div">
//           {title}
//         </Typography>
//         <Image src={image} alt={`${title} image`} className={styles.image} />
//       </Card>

//       <Typography variant="h6" className={styles.description}>
//         {description}
//       </Typography>

//       <div className={styles.dividerContainer}>
//         <div className={styles.circle} />
//       </div>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <>
//       <WelcomeCard
//         image={Welcome}
//         description="Precast concrete consists of concrete (a mixture of cement, water,
//           aggregates, and admixtures) that is cast into a specific shape at a
//           location other than its in-service position. The concrete is placed
//           into a form, typically wood or steel, and cured before being stripped
//           from the form, usually the following day. These components are then
//           transported to the construction site for erection into place."
//       />

//       <WelcomeCard
//         image={QualityAss}
//         description="Since 1991, we’ve set benchmarks in construction with our commitment to quality, speed, and innovative technology. Our products are made from 100% virgin raw materials, ensuring premium quality that meets all performance standards.

// Our specialized technical team designs and develops a range of cost-effective, eco-friendly concrete products, manufactured with cutting-edge technology and precision. We emphasize durability, aesthetics, and affordability, creating sustainable solutions that surpass conventional products.

// With the DEAL MAGSIL brand, we’re proud to provide industry-leading quality, modern technology, and exceptional service across the district, consistently aiming to exceed customer expectations."
//       />
//     </>
//   );
// }

import Image from "next/image";
import styles from "../components/styles/welcomeCard.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Section 1 */}
      <div className={`${styles.section} ${styles.reverse}`}>
        {/* Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/welcome.jpg" // Replace with your image path
            alt="Virtual Property Exploration"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>

        {/* Text */}
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Virtual Property Exploration</h2>
          <p className={styles.subtitle}>Explore Anywhere, Anytime</p>
          <ul className={styles.list}>
            <li>
              Precast concrete consists of concrete (a mixture of cement, water,
              aggregates, and admixtures) that is cast into a specific shape at
              a location other than its in-service position. The concrete is
              placed into a form, typically wood or steel, and cured before
              being stripped from the form, usually the following day. These
              components are then transported to the construction site for
              erection into place.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 2 */}
      <div className={styles.secondContent}>
        <div className={styles.section}>
          {/* Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/images/quality1.png"
              alt="On-Site Expertise"
              width={300}
              height={300}
              className={styles.image}
            />
          </div>

          {/* Text */}
          <div className={styles.textContainer}>
            <h2 className={styles.title}>On-Site Expertise</h2>
            <p className={styles.subtitle}>Trust in Our Specialists</p>
            <ul className={styles.list}>
              <li>
                Since 1991, we’ve set benchmarks in construction with our
                commitment to quality, speed, and innovative technology. Our
                products are made from 100% virgin raw materials, ensuring
                premium quality that meets all performance standards. Our
                specialized technical team designs and develops a range of
                cost-effective, eco-friendly concrete products, manufactured
                with cutting-edge technology and precision. We emphasize
                durability, aesthetics, and affordability, creating sustainable
                solutions that surpass conventional products. With the DEAL
                MAGSIL brand, we’re proud to provide industry-leading quality,
                modern technology, and exceptional service across the district,
                consistently aiming to exceed customer expectations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
