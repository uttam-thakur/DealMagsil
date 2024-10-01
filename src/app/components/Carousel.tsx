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
      setAngle((prev) => prev + 1);
    }, 100);

    return () => clearInterval(autoRotate);
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.carousel}
        onMouseDown={handleMouseDown}
        style={{ transform: `rotateY(${angle}deg)` }}
      >
        {/* 10 Cards */}
        {/* <div
          className={styles.card}
          style={{ background: "linear-gradient(45deg, #f9a, #f06)" }}
        >
          Card 1
        </div> */}

        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1207318986/photo/colorful-cobblestone-road-pavement-and-lawn-divided-by-a-concrete-curb-backlight.jpg?s=612x612&w=0&k=20&c=Q-bB3JU5LtRTgzh1iOcCaxJt4NMTw9sXNUSbuJsZjkg=')",
            backgroundSize: "cover", // Ensures the image covers the entire card
            backgroundPosition: "center", // Centers the image
          }}
        >
          Card 1
        </div>

        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url('https://4.imimg.com/data4/NM/LJ/MY-773089/cement-fencing-poles-500x500.jpg')",
            backgroundSize: "cover", // Ensures the image covers the entire card
            backgroundPosition: "center", // Centers the image
          }}
        >
          Card 2
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url('https://4.imimg.com/data4/NM/LJ/MY-773089/cement-fencing-poles-500x500.jpg')",
            backgroundSize: "cover", // Ensures the image covers the entire card
            backgroundPosition: "center", // Centers the image
          }}
        >
          Card 3
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1435155757/photo/pallet-of-concrete-cinder-blocks-grey-uniformed-brick-shapes-building-material-new-for-use-on.jpg?s=612x612&w=0&k=20&c=KbVZUrd3_WzwdWlfaglOAoqCp7enBGsvwJjQrbQnXYA=')",
            backgroundSize: "cover", // Ensures the image covers the entire card
            backgroundPosition: "center", // Centers the image
          }}
        >
          Card 4
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/540406066/photo/reinforced-concrete-items.jpg?s=612x612&w=0&k=20&c=OzkqJ7ECpG0_53TAPjS2K3ONqfMSdTkIXPeno5LJxeo=')",
            backgroundSize: "cover", // Ensures the image covers the entire card
            backgroundPosition: "center", // Centers the image
          }}
        >
          Card 5
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url('https://4.imimg.com/data4/NM/LJ/MY-773089/cement-fencing-poles-500x500.jpg')",
            backgroundSize: "cover", // Ensures the image covers the entire card
            backgroundPosition: "center", // Centers the image
          }}
        >
          Card 6
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1437054408/photo/new-checkered-concrete-cinder-tiles-of-a-garden-sidewalk-lawn-in-palette-in-store.jpg?s=612x612&w=0&k=20&c=Wo7n7zVoSybvTmJcyc1wrXNAHKeNpu0BOtJYf2AWgko=')",
            backgroundSize: "cover", // Ensures the image covers the entire card
            backgroundPosition: "center", // Centers the image
          }}
        >
          Card 7
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1435155757/photo/pallet-of-concrete-cinder-blocks-grey-uniformed-brick-shapes-building-material-new-for-use-on.jpg?s=612x612&w=0&k=20&c=KbVZUrd3_WzwdWlfaglOAoqCp7enBGsvwJjQrbQnXYA=')",
            backgroundSize: "cover", // Ensures the image covers the entire card
            backgroundPosition: "center", // Centers the image
          }}
        >
          Card 8
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/540406066/photo/reinforced-concrete-items.jpg?s=612x612&w=0&k=20&c=OzkqJ7ECpG0_53TAPjS2K3ONqfMSdTkIXPeno5LJxeo=')",
            backgroundSize: "cover", // Ensures the image covers the entire card
            backgroundPosition: "center", // Centers the image
          }}
        >
          Card 9
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1410452186/photo/foamed-lightweight-concrete-isolated-on-white.jpg?s=612x612&w=0&k=20&c=XCtmJhurwiNjjFAuFtvkfB62JEgfk0sv9B32Eq4xywI=')",
            backgroundSize: "cover", // Ensures the image covers the entire card
            backgroundPosition: "center", // Centers the image
          }}
        >
          Card 10
        </div>
      </div>
    </div>
  );
};

export default Carousel;
