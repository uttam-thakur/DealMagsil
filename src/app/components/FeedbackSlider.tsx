"use client";
import React, { useState } from "react";
import { Box, Typography, Avatar, Rating, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import styles from "../components/styles/FeedbackSlider.module.css";

interface Feedback {
  image: string;
  feedback: string;
  rating: number;
  name: string;
  designation: string;
}

const feedbackData: Feedback[] = [
  {
    image: "/images/feedback/profileImg.png",
    feedback:
      "Amazing service and top-notch product quality! The attention to detail exceeded my expectations.",
    rating: 5,
    name: "John Doe",
    designation: "CEO, TechCorp",
  },
  {
    image: "/images/feedback/profileImg1.png",
    feedback:
      "Incredible experience! Professionalism and product quality were top-notch.",
    rating: 4.5,
    name: "Jane Smith",
    designation: "Marketing Director, Webify",
  },
  {
    image: "/images/feedback/profileImg2.jpg",
    feedback: "Great service, quick turnaround, and excellent product quality!",
    rating: 5,
    name: "Robert Johnson",
    designation: "Project Manager, BuildIt",
  },
];

const FeedbackSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + feedbackData.length) % feedbackData.length
    );
  };

  const handleRadioClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Typography variant="h3" className={styles.heading}></Typography>
      <Box
        style={{
          backgroundSize: "cover",
          backgroundColor: "black",
          backgroundPosition: "center",
          padding: "50px 20px",
        }}
        className={styles.mainContainer}
      >
        <p className={styles.heading}>Client Feedback</p>
        <Box className={styles.sliderContainer}>
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className={`${styles.navButton} ${styles.left}`}
          >
            <ArrowBackIos />
          </button>

          {/* Slide Content */}
          <Box className={styles.slide}>
            <Avatar
              alt={feedbackData[currentIndex].name}
              src={feedbackData[currentIndex].image}
              className={styles.avatar}
            />
            <Typography variant="h6" className={styles.feedbackText}>
              "{feedbackData[currentIndex].feedback}"
            </Typography>
            <Rating
              name="read-only"
              value={feedbackData[currentIndex].rating}
              precision={0.5}
              readOnly
              sx={{ marginTop: "10px" }}
            />
            <Typography variant="h6" className={styles.name} marginTop="10px">
              {feedbackData[currentIndex].name}
            </Typography>
            <Typography variant="subtitle1" className={styles.designation}>
              {feedbackData[currentIndex].designation}
            </Typography>
          </Box>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className={`${styles.navButton} ${styles.right}`}
          >
            <ArrowForwardIos />
          </button>
        </Box>

        {/* Radio Button Pagination */}
        <Box className={styles.radioContainer}>
          {feedbackData.map((_, index) => (
            <div
              key={index}
              onClick={() => handleRadioClick(index)}
              className={`${styles.radioButton} ${
                currentIndex === index ? styles.active : ""
              }`}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default FeedbackSlider;
