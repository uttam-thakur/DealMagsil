import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import styles from "../components/styles/UpcomingProducts.module.css";

const carouselData = [
  {
    title: "CELLULAR LIGHT WEIGHT CONCRETE BLOCKS",
    description:
      "Foam Concrete Products / CLC Bricks / CLC Blocks / Eco-Friendly Light Weight Bricks",
    items: [
      {
        src: "/images/products/Newly Launch Product/1.jfif",
        altText: "Foam Concrete",
        caption: "Foam Concrete",
      },
      {
        src: "/images/products/Newly Launch Product/2.jfif",
        altText: "CLC Brick",
        caption: "CLC Brick",
      },
      {
        src: "/images/products/Newly Launch Product/3.jfif",
        altText: "Eco-Friendly Brick",
        caption: "Eco-Friendly Brick",
      },
    ],
  },
  {
    title: "CEMENT DOOR WINDOW FRAME",
    description: "Door Frame / Window Frame",
    items: [
      {
        src: "/images/products/Newly Launch Product/precast Door Frame.webp",
        altText: "Precast Door Window",
        caption: "Precast Door Window",
      },
      {
        src: "/images/products/Newly Launch Product/precast-door-frame.avif",
        altText: "Precast Door Frame",
        caption: "Precast Door Frame",
      },
      {
        src: "/images/products/Newly Launch Product/images.jfif",
        altText: "Precast Window Frame",
        caption: "Precast Window Frame",
      },
    ],
  },
  {
    title: "CEMENT Bench For OutDoor",
    description: "Bench",
    items: [
      {
        src: "/images/products/Newly Launch Product/cement bench.avif",
        altText: "Single Color Cement Bench",
        caption: "Single Color Cement Bench",
      },
      {
        src: "/images/products/Newly Launch Product/cement bench1.jfif",
        altText: "Single Color Cement Bench",
        caption: "Single Color Cement Bench",
      },
      {
        src: "/images/products/Newly Launch Product/cement bench2.jpg",
        altText: "Single Color Cement Bench",
        caption: "Single Color Cement Bench",
      },
    ],
  },
  {
    title: "Precast Housing Solution",
    description: "Beam & columns / Wall Panels / Stairs / Structural Slab",
    items: [
      {
        src: "/images/products/Newly Launch Product/precast beam and coloumn.jfif",
        altText: "Precast Beam & Column",
        caption: "Precast Beam & Column",
      },
      {
        src: "/images/products/Newly Launch Product/precast wall pannels.jfif",
        altText: "Precast Wall Panels",
        caption: "Precast Wall Panels",
      },
      {
        src: "/images/products/Newly Launch Product/stairs.jfif",
        altText: "Stairs & Enclosures",
        caption: "Stairs & Enclosures",
      },
      {
        src: "/images/products/Newly Launch Product/precast housing unit.jpg",
        altText: "Precast Housing Unit",
        caption: "Precast Housing Unit",
      },
    ],
  },
];

const UpcomingProducts = () => {
  const [activeIndexes, setActiveIndexes] = useState(
    Array(carouselData.length).fill(0)
  );
  const [animatingStates, setAnimatingStates] = useState(
    Array(carouselData.length).fill(false)
  );

  const next = (index: any) => {
    if (animatingStates[index]) return;
    const newIndex =
      activeIndexes[index] === carouselData[index].items.length - 1
        ? 0
        : activeIndexes[index] + 1;
    updateState(index, newIndex);
  };

  const previous = (index: any) => {
    if (animatingStates[index]) return;
    const newIndex =
      activeIndexes[index] === 0
        ? carouselData[index].items.length - 1
        : activeIndexes[index] - 1;
    updateState(index, newIndex);
  };

  const goToIndex = (newIndex: any, index: any) => {
    if (animatingStates[index]) return;
    updateState(index, newIndex);
  };

  const updateState = (index: any, newActiveIndex: any) => {
    setActiveIndexes((prev) =>
      prev.map((value, i) => (i === index ? newActiveIndex : value))
    );
    setAnimatingStates((prev) =>
      prev.map((value, i) => (i === index ? true : value))
    );
  };

  const renderSlides = (items: any, index: any) =>
    items.map((item: any) => (
      <CarouselItem
        onExiting={() =>
          setAnimatingStates((prev) =>
            prev.map((value, i) => (i === index ? true : value))
          )
        }
        onExited={() =>
          setAnimatingStates((prev) =>
            prev.map((value, i) => (i === index ? false : value))
          )
        }
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          className={styles.carouselimage}
        />
      </CarouselItem>
    ));

  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.titleCenter}>OUR EXCLUSIVE PRODUCTS</h2>
        <div className={styles.upcomingproductssection}>
          <Row>
            {carouselData.map((carousel, index) => (
              <Col md="6" key={index}>
                <Card className={styles.customcard}>
                  <CardBody>
                    <CardTitle
                      tag="h5"
                      className="text-center "
                      style={{ color: "rgb(102, 96, 96)" }}
                    >
                      {carousel.title}
                    </CardTitle>

                    <p
                      className={styles.captionText}
                      style={{
                        color: "gray",
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        textAlign: "center",
                        letterSpacing: "1px",
                      }}
                    >
                      {carousel.items[activeIndexes[index]].caption}
                    </p>
                    <br />

                    <Carousel
                      activeIndex={activeIndexes[index]}
                      interval={false}
                      next={() => next(index)}
                      previous={() => previous(index)}
                    >
                      <CarouselIndicators
                        items={carousel.items}
                        activeIndex={activeIndexes[index]}
                        onClickHandler={(newIndex) =>
                          goToIndex(newIndex, index)
                        }
                      />
                      {renderSlides(carousel.items, index)}
                      <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={() => previous(index)}
                      />
                      <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={() => next(index)}
                      />
                    </Carousel>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default UpcomingProducts;
