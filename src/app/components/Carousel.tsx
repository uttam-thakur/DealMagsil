// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import styles from "../../app/components/styles/Carousel.module.css";

// const Carousel = () => {
//   const [angle, setAngle] = useState(0);
//   const isDragging = useRef(false);
//   const startX = useRef(0);

//   const handleMouseDown = (e: any) => {
//     isDragging.current = true;
//     startX.current = e.clientX;
//   };
//   const handleMouseMove = (e: any) => {
//     if (isDragging.current) {
//       const dx = e.clientX - startX.current;
//       const rotationAngle = dx / 5;
//       setAngle((prev) => prev + rotationAngle);
//       startX.current = e.clientX;
//     }
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     // Add mouse events for drag interaction
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   // Auto-rotate carousel
//   useEffect(() => {
//     const autoRotate = setInterval(() => {
//       setAngle((prev) => prev + 1);
//     }, 100);

//     return () => clearInterval(autoRotate);
//   }, []);

//   return (
//     <div className={styles.carouselWrapper}>
//       <div
//         className={styles.carousel}
//         onMouseDown={handleMouseDown}
//         style={{ transform: `rotateY(${angle}deg)` }}
//       >
//         <div
//           className={styles.card}
//           style={{
//             backgroundImage:
//               "url('https://media.istockphoto.com/id/1207318986/photo/colorful-cobblestone-road-pavement-and-lawn-divided-by-a-concrete-curb-backlight.jpg?s=612x612&w=0&k=20&c=Q-bB3JU5LtRTgzh1iOcCaxJt4NMTw9sXNUSbuJsZjkg=')",
//             backgroundSize: "cover", // Ensures the image covers the entire card
//             backgroundPosition: "center", // Centers the image
//           }}
//         >
//           <h3 className={styles.bottomRightText}>
//             colorful cobblestone road pavement
//           </h3>
//         </div>

//         <div
//           className={styles.card}
//           style={{
//             backgroundImage:
//               "url('/images/products/precastboundarywalls/4.jpg')",
//             backgroundSize: "cover", // Ensures the image covers the entire card
//             backgroundPosition: "center", // Centers the image
//           }}
//         >
//           <h3 className={styles.bottomRightText}>precast boundary wall</h3>
//         </div>
//         <div
//           className={styles.card}
//           style={{
//             backgroundImage:
//               "url('/images/products/Interlocking Paver Blocks/hardscape3.jpg')",
//             backgroundSize: "cover", // Ensures the image covers the entire card
//             backgroundPosition: "center", // Centers the image
//           }}
//         >
//           <h3 className={styles.bottomRightText}>colorful brick work</h3>
//         </div>
//         <div
//           className={styles.card}
//           style={{
//             backgroundImage:
//               "url('https://media.istockphoto.com/id/1435155757/photo/pallet-of-concrete-cinder-blocks-grey-uniformed-brick-shapes-building-material-new-for-use-on.jpg?s=612x612&w=0&k=20&c=KbVZUrd3_WzwdWlfaglOAoqCp7enBGsvwJjQrbQnXYA=')",
//             backgroundSize: "cover", // Ensures the image covers the entire card
//             backgroundPosition: "center", // Centers the image
//           }}
//         >
//           <h3 className={styles.bottomRightText}>pallet of concrete cinder</h3>
//         </div>
//         <div
//           className={styles.card}
//           style={{
//             backgroundImage:
//               "url('https://media.istockphoto.com/id/540406066/photo/reinforced-concrete-items.jpg?s=612x612&w=0&k=20&c=OzkqJ7ECpG0_53TAPjS2K3ONqfMSdTkIXPeno5LJxeo=')",
//             backgroundSize: "cover", // Ensures the image covers the entire card
//             backgroundPosition: "center", // Centers the image
//           }}
//         >
//           <h3 className={styles.bottomRightText}>reinforced concrete</h3>
//         </div>
//         <div
//           className={styles.card}
//           style={{
//             backgroundImage:
//               "url('https://4.imimg.com/data4/NM/LJ/MY-773089/cement-fencing-poles-500x500.jpg')",
//             backgroundSize: "cover", // Ensures the image covers the entire card
//             backgroundPosition: "center", // Centers the image
//           }}
//         >
//           <h3 className={styles.bottomRightText}>cement fencing poles</h3>
//         </div>
//         <div
//           className={styles.card}
//           style={{
//             backgroundImage:
//               "url('https://media.istockphoto.com/id/1437054408/photo/new-checkered-concrete-cinder-tiles-of-a-garden-sidewalk-lawn-in-palette-in-store.jpg?s=612x612&w=0&k=20&c=Wo7n7zVoSybvTmJcyc1wrXNAHKeNpu0BOtJYf2AWgko=')",
//             backgroundSize: "cover", // Ensures the image covers the entire card
//             backgroundPosition: "center", // Centers the image
//           }}
//         >
//           <h3 className={styles.bottomRightText}>checkered concrete cinder</h3>
//         </div>
//         <div
//           className={styles.card}
//           style={{
//             backgroundImage:
//               "url('https://media.istockphoto.com/id/1435155757/photo/pallet-of-concrete-cinder-blocks-grey-uniformed-brick-shapes-building-material-new-for-use-on.jpg?s=612x612&w=0&k=20&c=KbVZUrd3_WzwdWlfaglOAoqCp7enBGsvwJjQrbQnXYA=')",
//             backgroundSize: "cover", // Ensures the image covers the entire card
//             backgroundPosition: "center", // Centers the image
//           }}
//         >
//           <h3 className={styles.bottomRightText}>pallet of concrete cinder</h3>
//         </div>
//         <div
//           className={styles.card}
//           style={{
//             backgroundImage:
//               "url('https://media.istockphoto.com/id/540406066/photo/reinforced-concrete-items.jpg?s=612x612&w=0&k=20&c=OzkqJ7ECpG0_53TAPjS2K3ONqfMSdTkIXPeno5LJxeo=')",
//             backgroundSize: "cover", // Ensures the image covers the entire card
//             backgroundPosition: "center", // Centers the image
//           }}
//         >
//           <h3 className={styles.bottomRightText}>reinforced concrete</h3>
//         </div>
//         <div
//           className={styles.card}
//           style={{
//             backgroundImage:
//               "url('https://media.istockphoto.com/id/1410452186/photo/foamed-lightweight-concrete-isolated-on-white.jpg?s=612x612&w=0&k=20&c=XCtmJhurwiNjjFAuFtvkfB62JEgfk0sv9B32Eq4xywI=')",
//             backgroundSize: "cover", // Ensures the image covers the entire card
//             backgroundPosition: "center", // Centers the image
//           }}
//         >
//           <h3 className={styles.bottomRightText}>
//             foamed lightweight concrete
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
"use client";
import { useState, useEffect } from "react";
import styles from "../../app/components/styles/Carousel.module.css";

const images = [
  "https://www.kajariaceramics.com/images/slider/indias-no1-tile-company.jpg",
  "https://www.kajariaceramics.com/images/slider/celebrating-35-years-of-excellence.jpg",
  "https://www.kajariaceramics.com/images/slider/desh-ki-mitti-se-bani-tile-se-desh-ko-banate-hai.jpg",
  // "https://4.imimg.com/data4/NM/LJ/MY-773089/cement-fencing-poles-500x500.jpg",
  // "https://media.istockphoto.com/id/540406066/photo/reinforced-concrete-items.jpg?s=612x612&w=0&k=20&c=OzkqJ7ECpG0_53TAPjS2K3ONqfMSdTkIXPeno5LJxeo=",
  // "https://media.istockphoto.com/id/1410452186/photo/foamed-lightweight-concrete-isolated-on-white.jpg?s=612x612&w=0&k=20&c=XCtmJhurwiNjjFAuFtvkfB62JEgfk0sv9B32Eq4xywI=",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselImage}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <button className={styles.prevButton} onClick={handlePrevious}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
