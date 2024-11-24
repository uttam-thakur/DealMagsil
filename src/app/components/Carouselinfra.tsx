"use client";

import React, { useState } from "react";
import styles from "../components/styles/Carouselinfra.module.css";

const Carouselinfra = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const cards = [
    {
      title: "We manage every detail in your Buying Journey",
      content:
        " we believe that a seamless buying experience is as important as the quality of the products we offer. Specializing in premium tiles, pavers, and interlocks, we take pride in managing every detail of your journey, from selection to installation. Whether you're designing a stunning patio, revamping your driveway, or creating a luxurious interior, our team ensures that you receive expert guidance, tailored solutions, and exceptional service at every step. With our attention to detail, we handle the complexities so you can focus on transforming your vision into reality. Choose Deal Magsil for a hassle-free buying experience, where precision, quality, and customer satisfaction are our priorities",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1>Experience our Complimentary Concierge Service</h1>
          <h2>From Beginning to Ending</h2>
        </div>

        <div className={styles.cardContainer}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardContent}>{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carouselinfra;
