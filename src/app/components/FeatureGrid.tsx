import React from "react";
import "../components/styles/FeatureGrid.css"; // Import the CSS file for styling

// Individual FeatureCard component
const FeatureCard = ({ imageSrc, title, description }: any) => {
  return (
    <div className="feature-card-swiper">
      {/* Adding image at the top of each card */}
      <img src={imageSrc} alt={title} className="feature-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Main FeatureGrid component
const FeatureGridSwiper = () => {
  // Array of features with images
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
      description: "Swiper provides 100% RTL support with correct layout.",
    },
    {
      imageSrc:
        "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Multi Row Slides Layout",
      description:
        "Swiper allows a multiple row slides layout, with a few slides per column.",
    },
    {
      imageSrc:
        "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Transition Effects",
      description:
        "There are a lot of transition effects including 3D effects.",
    },
    {
      imageSrc:
        "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Full Navigation Control",
      description:
        "All required navigation elements are here - Pagination, Navigation, Scrollbar.",
    },
    {
      imageSrc:
        "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Two-way Control & Thumbs",
      description:
        "Swiper can be used as a controller for any number of other Swipers.",
    },
    {
      imageSrc:
        "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Most Flexible Slides Layout Grid",
      description:
        "Swiper has a lot of parameters to make it as flexible as possible.",
    },
    {
      imageSrc:
        "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Parallax Transitions",
      description:
        "Swiper supports modern parallax transition effects that can be used on any element inside of Swiper.",
    },
    {
      imageSrc:
        "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Images Lazy Loading",
      description:
        "Delays loading of images in inactive/invisible slides until the user swipes to them.",
    },
    {
      imageSrc:
        "https://images.jdmagicbox.com/quickquotes/images_main/chequered-tiles-2219490969-sm4dwb3k.jpg", // Add the correct path to the image      title: "Virtual Slides",
      description:
        "This feature is great when you have a lot of content-heavy slides so it keeps just the required amount of slides in DOM.",
    },
  ];

  return (
    <div className="feature-grid-swiper">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          imageSrc={feature.imageSrc}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureGridSwiper;
