"use client";
import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import { Typography } from "@mui/material";

import styles from "../components/styles/FeatureGrid.module.css";
import FeatureGridSlider from "./FeatureGridSlider";

const features = [
  {
    imageSrc: "/images/tiles/dotted.webp",
    title: "DOTTED",
    description:
      "A versatile, dotted pattern tile ideal for adding subtle texture and depth to any space.",
  },
  {
    imageSrc: "/images/tiles/barfi.jfif",
    title: "BARFI",
    description:
      "Inspired by classic Barfi shapes, this tile brings a unique charm with its geometric elegance.",
  },
  {
    imageSrc: "/images/tiles/quarter circle.jfif",
    title: "QUARTER CIRCLE",
    description:
      "Features a unique quarter-circle design, perfect for creating dynamic patterns in floors or walls.",
  },
  {
    imageSrc: "/images/tiles/chequered.jfif",
    title: "CHEQUERED",
    description:
      "A classic chequered pattern that brings a bold, timeless style to interiors and exteriors.",
  },
  {
    imageSrc: "/images/tiles/grey quarter circle.jfif",
    title: "GREY QUARTER CIRCLE",
    description:
      "A subtle, grey-toned quarter-circle tile that provides a modern look with an artistic flair.",
  },
  {
    imageSrc: "/images/tiles/cadburry.jfif",
    title: "CADBURRY",
    description:
      "Rich and smooth, the Cadbury tile adds an elegant, luxurious feel to any surface.",
  },
  {
    imageSrc: "/images/tiles/roof.jfif",
    title: "ROOF TILE",
    description:
      "Durable and weather-resistant, this tile is ideal for roofing with a stylish, traditional look.",
  },
  {
    imageSrc: "/images/tiles/black&white.jfif",
    title: "BLACK AND WHITE CHECKER",
    description:
      "A bold black-and-white checker pattern that enhances spaces with a striking, modern appeal.",
  },
  {
    imageSrc: "/images/tiles/l-shaped.jfif",
    title: "L-SHAPED SAND BLAST",
    description:
      "The L-shaped design with a sandblast finish adds texture and modernity to any project.",
  },
  {
    imageSrc: "/images/tiles/hex.jfif",
    title: "TRI - HEX",
    description:
      "Combines triangular and hexagonal shapes, perfect for creating eye-catching, intricate patterns.",
  },
  {
    imageSrc: "/images/tiles/zig-zag.jfif",
    title: "ZIG - ZAG UNI PAVER",
    description:
      "A unique zig-zag pattern that provides strong interlocking support for outdoor paving needs.",
  },
  {
    imageSrc: "/images/tiles/milano.jfif",
    title: "MILANO",
    description:
      "Elegant and smooth, Milano tiles are designed to bring Italian charm and sophistication to any surface.",
  },
  {
    imageSrc: "/images/tiles/squared shaped stone finish.jfif",
    title: "SQUARED SHAPED STONE FINISH",
    description:
      "Features a natural stone finish that adds earthy tones and texture to floors or walls.",
  },

  {
    imageSrc: "/images/tiles/brick.jfif",
    title: "BRICK SHAPED",
    description:
      "A classic brick shape that offers a rustic, timeless appeal for both indoor and outdoor spaces.",
  },
];

interface FeatureGridProps {
  searchTerm: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ searchTerm }) => {
  const filteredFeatures = features.filter((feature) =>
    feature.title.toLowerCase().includes(searchTerm)
  );
  return (
    <div style={{ backgroundColor: "rgb(244, 242, 242)" }}>
      <Typography
        className={styles.customTitle}
        variant="h4"
        component="h2"
        gutterBottom
      >
        DIFFRENT TYPES OF TILES
      </Typography>

      <div className={styles.featureGrid}>
        {filteredFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            imageSrc={feature?.imageSrc}
            title={feature?.title}
            description={feature?.description}
          />
        ))}
      </div>
      <div className={styles.featuregridSliderDiv}>
        {/* <FeatureGridSlider /> */}
      </div>
    </div>
  );
};

export default FeatureGrid;
