"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../Carousel.module.css";

const Carousel = () => {
  const [angle, setAngle] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const handleMouseDown = (e: any) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };
  const handleMouseMove = (e: any) => {
    if (isDragging.current) {
      const dx = e.clientX - startX.current;
      const rotationAngle = dx / 5;
      setAngle((prev) => prev + rotationAngle);
      startX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    // Add mouse events for drag interaction
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const autoRotate = setInterval(() => {
      setAngle((prev) => prev + 1); // Slow auto rotation (increase angle by 1 degree)
    }, 100); // Adjust the speed of rotation (100ms interval for smoother rotation)

    return () => clearInterval(autoRotate); // Cleanup on component unmount
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.carousel}
        onMouseDown={handleMouseDown}
        style={{ transform: `rotateY(${angle}deg)` }}
      >
        {/* 10 Cards */}
        <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #f9a, #f06)" }}
        >
          Card 1
        </div>
        <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #69f, #38a)" }}
        >
          Card 2
        </div>
        <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #6f6, #3a8)" }}
        >
          Card 3
        </div>
        <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #fa6, #f38)" }}
        >
          Card 4
        </div>
        <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #fea, #fa8)" }}
        >
          Card 5
        </div>
        <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #9f6, #38a)" }}
        >
          Card 6
        </div>
        <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #f69, #83f)" }}
        >
          Card 7
        </div>
        <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #66f, #6af)" }}
        >
          Card 8
        </div>
        <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #ff8, #fa9)" }}
        >
          Card 9
        </div>
        <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #0f6, #5a3)" }}
        >
          Card 10
        </div>
      </div>
    </div>
  );
};

export default Carousel;
