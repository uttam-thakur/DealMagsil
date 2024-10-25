import React from "react";
import FeatureCard from "./FeatureCard";
import styles from "../components/styles/FeatureGrid.module.css";

const features = [
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image
    title: "Library Agnostic",
    description:
      "Swiper doesn't require any JavaScript libraries like jQuery, which makes Swiper much smaller and faster.",
  },
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image
    title: "Modular Structure",
    description:
      "Swiper has a modular structure and allows you to use only the necessary modules to make its size even smaller.",
  },
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Full RTL Support",
    title: "Library Agnostic",

    description: "Swiper provides 100% RTL support with correct layout.",
  },
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Multi Row Slides Layout",
    title: "Library Agnostic",

    description:
      "Swiper allows a multiple row slides layout, with a few slides per column.",
  },
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Transition Effects",
    title: "Library Agnostic",

    description: "There are a lot of transition effects including 3D effects.",
  },
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Full Navigation Control",
    title: "Library Agnostic",

    description:
      "All required navigation elements are here - Pagination, Navigation, Scrollbar.",
  },
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Two-way Control & Thumbs",
    title: "Library Agnostic",

    description:
      "Swiper can be used as a controller for any number of other Swipers.",
  },
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Most Flexible Slides Layout Grid",
    title: "Library Agnostic",

    description:
      "Swiper has a lot of parameters to make it as flexible as possible.",
  },
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Parallax Transitions",
    title: "Library Agnostic",

    description:
      "Swiper supports modern parallax transition effects that can be used on any element inside of Swiper.",
  },
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Images Lazy Loading",
    title: "Library Agnostic",

    description:
      "Delays loading of images in inactive/invisible slides until the user swipes to them.",
  },
  {
    imageSrc:
      "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Virtual Slides",
    title: "Library Agnostic",

    description:
      "This feature is great when you have a lot of content-heavy slides so it keeps just the required amount of slides in DOM.",
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className={styles.featureGrid}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          imageSrc={feature?.imageSrc}
          title={feature?.title}
          description={feature?.description}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;

//second ui
// const FeatureGrid: React.FC = () => {
//   return (
//     <div className={styles.featureGrid}>
//       {features.map((feature, index) => (
//         <FeatureCard
//           key={index}
//           imageSrc={feature.imageSrc}
//           title={feature.title}
//           description={feature.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default FeatureGrid;
