import React from "react";
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
import "../components/styles/UpcomingProducts.css"; // Make sure to create this CSS file

const items1 = [
  {
    // src: "https://picsum.photos/id/123/1200/400",
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
    altText: "Eco-Friendly Brick ",
    caption: "Eco-Friendly Brick",
  },
];

const items2 = [
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
];

const items3 = [
  {
    src: "/images/products/Newly Launch Product/cement bench.avif",
    altText: "single color cement bench",
    caption: "Single Color Cement Bench",
  },

  {
    src: "/images/products/Newly Launch Product/cement bench1.jfif",
    altText: "single color cement bench",
    caption: "Single Color Cement Bench",
  },
  {
    src: "/images/products/Newly Launch Product/cement bench2.jpg",
    altText: "single color cement bench",
    caption: "Single Color Cement Bench",
  },
];

const items4 = [
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
];

const UpcomingProducts = () => {
  // Generalized handler functions
  const [activeIndex1, setActiveIndex1] = React.useState(0);
  const [animating1, setAnimating1] = React.useState(false);

  const [activeIndex2, setActiveIndex2] = React.useState(0);
  const [animating2, setAnimating2] = React.useState(false);

  const [activeIndex3, setActiveIndex3] = React.useState(0);
  const [animating3, setAnimating3] = React.useState(false);

  const [activeIndex4, setActiveIndex4] = React.useState(0);
  const [animating4, setAnimating4] = React.useState(false);
  const next = (
    activeIndex: any,
    setActiveIndex: any,
    itemsLength: any,
    animating: any
  ) => {
    if (animating) return;
    const nextIndex = activeIndex === itemsLength - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = (
    activeIndex: any,
    setActiveIndex: any,
    itemsLength: any,
    animating: any
  ) => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemsLength - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: any, setActiveIndex: any, animating: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const renderSlides = (
    items: any,
    animatingState: any,
    setAnimatingState: any
  ) =>
    items.map((item: any) => (
      <CarouselItem
        onExiting={() => setAnimatingState(true)}
        onExited={() => setAnimatingState(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-image" />
        <CarouselCaption
          captionText={item.caption}
          // captionHeader={item.altText}
        />
      </CarouselItem>
    ));

  return (
    <div className="upcoming-products-section">
      <h2 className="text-center" style={{ color: "red", fontSize: "35px" }}>
        NEWLY LAUNCH PRODUCTS
      </h2>
      <Row>
        {/* First Card */}
        <Col md="6">
          <Card className="custom-card">
            <CardBody>
              <CardTitle tag="h5" className="text-center">
                CELLULAR LIGHT WEIGHT CONCRETE BLOCKS
              </CardTitle>
              <CardText className="text-center">
                Foam Concrete Products / CLC Bricks / CLC Blocks / Eco-Friendly
                Light Weight Bricks
              </CardText>
              <Carousel
                interval={false}
                activeIndex={activeIndex1}
                next={() =>
                  next(activeIndex1, setActiveIndex1, items1.length, animating1)
                }
                previous={() =>
                  previous(
                    activeIndex1,
                    setActiveIndex1,
                    items1.length,
                    animating1
                  )
                }
              >
                <CarouselIndicators
                  items={items1}
                  activeIndex={activeIndex1}
                  onClickHandler={(newIndex) =>
                    goToIndex(newIndex, setActiveIndex1, animating1)
                  }
                />
                {renderSlides(items1, animating1, setAnimating1)}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={() =>
                    previous(
                      activeIndex1,
                      setActiveIndex1,
                      items1.length,
                      animating1
                    )
                  }
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={() =>
                    next(
                      activeIndex1,
                      setActiveIndex1,
                      items1.length,
                      animating1
                    )
                  }
                />
              </Carousel>
            </CardBody>
          </Card>
        </Col>

        {/* Second Card */}
        <Col md="6">
          <Card className="custom-card">
            <CardBody>
              <CardTitle tag="h5" className="text-center">
                CEMENT DOOR WINDOW FRAME
              </CardTitle>
              <CardText className="text-center">
                Door Frame / Window Frame
              </CardText>
              <Carousel
                activeIndex={activeIndex2}
                next={() =>
                  next(activeIndex2, setActiveIndex2, items2.length, animating2)
                }
                previous={() =>
                  previous(
                    activeIndex2,
                    setActiveIndex2,
                    items2.length,
                    animating2
                  )
                }
              >
                <CarouselIndicators
                  items={items2}
                  activeIndex={activeIndex2}
                  onClickHandler={(newIndex) =>
                    goToIndex(newIndex, setActiveIndex2, animating2)
                  }
                />
                {renderSlides(items2, animating2, setAnimating2)}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={() =>
                    previous(
                      activeIndex2,
                      setActiveIndex2,
                      items2.length,
                      animating2
                    )
                  }
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={() =>
                    next(
                      activeIndex2,
                      setActiveIndex2,
                      items2.length,
                      animating2
                    )
                  }
                />
              </Carousel>
            </CardBody>
          </Card>
        </Col>
        {/* Third Card */}
        <Col md="6">
          <Card className="custom-card">
            <CardBody>
              <CardTitle tag="h5" className="text-center">
                CEMENT Bench For OutDoor
              </CardTitle>
              <CardText className="text-center">Bench</CardText>
              <Carousel
                activeIndex={activeIndex3}
                next={() =>
                  next(activeIndex3, setActiveIndex3, items3.length, animating3)
                }
                previous={() =>
                  previous(
                    activeIndex3,
                    setActiveIndex3,
                    items3.length,
                    animating3
                  )
                }
              >
                <CarouselIndicators
                  items={items3}
                  activeIndex={activeIndex3}
                  onClickHandler={(newIndex) =>
                    goToIndex(newIndex, setActiveIndex3, animating3)
                  }
                />
                {renderSlides(items3, animating3, setAnimating3)}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={() =>
                    previous(
                      activeIndex3,
                      setActiveIndex3,
                      items3.length,
                      animating3
                    )
                  }
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={() =>
                    next(
                      activeIndex3,
                      setActiveIndex3,
                      items3.length,
                      animating3
                    )
                  }
                />
              </Carousel>
            </CardBody>
          </Card>
        </Col>
        {/* forth card */}
        <Col md="6">
          <Card className="custom-card">
            <CardBody>
              <CardTitle tag="h5" className="text-center">
                Precast Housing Solution
              </CardTitle>
              <CardText className="text-center">
                Beam & columns / Wall Pannels / Stairs / Structural Slab
              </CardText>
              <Carousel
                activeIndex={activeIndex4}
                next={() =>
                  next(activeIndex3, setActiveIndex3, items4.length, animating3)
                }
                previous={() =>
                  previous(
                    activeIndex4,
                    setActiveIndex3,
                    items4.length,
                    animating4
                  )
                }
              >
                <CarouselIndicators
                  items={items4}
                  activeIndex={activeIndex4}
                  onClickHandler={(newIndex) =>
                    goToIndex(newIndex, setActiveIndex4, animating4)
                  }
                />
                {renderSlides(items4, animating4, setAnimating4)}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={() =>
                    previous(
                      activeIndex4,
                      setActiveIndex4,
                      items4.length,
                      animating4
                    )
                  }
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={() =>
                    next(
                      activeIndex4,
                      setActiveIndex4,
                      items4.length,
                      animating4
                    )
                  }
                />
              </Carousel>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UpcomingProducts;
