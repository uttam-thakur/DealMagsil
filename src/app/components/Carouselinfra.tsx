// "use client";
// import { Typography } from "@mui/material";
// import React, { useState } from "react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap";
// import styles from "../components/styles/Carouselinfra.module.css";
// import Image from "next/image";

// const items = [
//   {
//     src: "/images/site/site1.jpg",
//     altText: "Site 1",
//     caption: "Site 1 Caption",
//   },
//   {
//     src: "/images/site/site2.jpg",
//     altText: "Site 2",
//     caption: "Site 2 Caption",
//   },
//   {
//     src: "/images/site/site3.jpg",
//     altText: "Site 3",
//     caption: "Site 3 Caption",
//   },
//   {
//     src: "/images/site/site4.jpg",
//     altText: "Site 4",
//     caption: "Site 4 Caption",
//   },
//   {
//     src: "/images/site/site5.jpg",
//     altText: "Site 5",
//     caption: "Site 5 Caption",
//   },
//   {
//     src: "/images/site/site6.jpg",
//     altText: "Site 6",
//     caption: "Site 6 Caption",
//   },
//   {
//     src: "/images/site/site7.jpg",
//     altText: "Site 7",
//     caption: "Site 7 Caption",
//   },
//   {
//     src: "/images/site/site8.jpg",
//     altText: "Site 8",
//     caption: "Site 8 Caption",
//   },
// ];

// const Carouselinfra = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(prevIndex);
//   };

//   const goToIndex = (newIndex: number) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item, index) => (
//     <CarouselItem
//       key={item.src}
//       onExiting={() => setAnimating(true)}
//       onExited={() => setAnimating(false)}
//     >
//       <Image
//         width={800}
//         height={400}
//         src={item.src}
//         alt={item.altText}
//         className={`${styles.carouselImage} d-block mx-auto`}
//         loading="lazy"
//       />
//       <CarouselCaption
//         captionText={item.caption}
//         captionHeader={item.altText}
//       />
//     </CarouselItem>
//   ));

//   return (
//     <div className={styles.main}>
//       <Typography
//         gutterBottom
//         variant="h4"
//         component="div"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         lineHeight="1.8rem"
//         fontWeight="600"
//       >
//         InfraStructure
//       </Typography>
//       <Carousel activeIndex={activeIndex} next={next} previous={previous}>
//         <CarouselIndicators
//           items={items}
//           activeIndex={activeIndex}
//           onClickHandler={goToIndex}
//         />
//         {slides}
//         <CarouselControl
//           direction="prev"
//           directionText="Previous"
//           onClickHandler={previous}
//         />
//         <CarouselControl
//           direction="next"
//           directionText="Next"
//           onClickHandler={next}
//         />
//       </Carousel>

//       <Typography
//         gutterBottom
//         variant="h6"
//         component="div"
//         marginTop="15px"
//         color="gray"
//       >
//         Our state-of-the-art manufacturing facility is strategically located
//         just 5 km from Asansol Railway Station, 4 km from Asansol Bus Stand, and
//         a 5-minute drive from Jubilee More on National Highway-2 in West Bengal.
//         Outfitted with advanced machinery and cutting-edge equipment, our
//         factory is designed to meet industry standards and adapt to the evolving
//         demands of our clients. With a high production capacity, we are equipped
//         to handle a wide range of requirements, delivering both standard and
//         customized products with exceptional quality. Our success stems from a
//         commitment to excellence, using only premium raw materials in our
//         manufacturing process. Our facility includes curing ponds to achieve
//         optimal product strength and durability, along with fully equipped
//         laboratories for rigorous testing to ensure our products meet the
//         highest standards of longevity and resilience
//       </Typography>
//       <div className={styles.customDivider}>
//         <div className={styles.dot} />
//       </div>
//     </div>
//   );
// };

// export default Carouselinfra;

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
  );
};

export default Carouselinfra;
