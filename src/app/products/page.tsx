"use client";

import React, { useState } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./page.css";
import UpcomingProduct from "../components/UpcomingProduct";
import FeatureGrid from "../components/FeatureGrid";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface CarouselItemProps {
  src: string;
  altText: string;
  caption: string;
  key: number;
}
const items: CarouselItemProps[] = [
  {
    // src: "https://picsum.photos/id/123/1200/400",
    src: "/images/products/Precast Slabs/1.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "/images/products/Precast Slabs/2.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "/images/products/Precast Slabs/3.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: "/images/products/Precast Slabs/4.jpg",
    altText: "Slide 4",
    caption: "Slide 4",
    key: 3,
  },
  {
    src: "/images/products/Precast Slabs/5.jpg",
    altText: "Slide 5",
    caption: "Slide 5",
    key: 3,
  },
];

const fenceItems: CarouselItemProps[] = [
  {
    // src: "https://picsum.photos/id/123/1200/400",
    src: "/images/products/Fencing Poles/1.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "/images/products/Fencing Poles/2.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "/images/products/Fencing Poles/3.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

interface ProductProps {
  title: string;
  description: string;
  images: CarouselItemProps[];
}

const ProductInfo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products: ProductProps[] = [
    {
      title: "PRECAST SLABS",
      description: `
        Reinforced Cement Concrete / Plain Cement Concrete.
        We manufacture Precast Slabs using various raw materials of high-grade. The array of slabs we offer is highly appreciated due to excellent stress-bearing capacity, aesthetics, and the sheer variety offered in terms of dimensions and designs.
        These covering slabs can be used for driveways, roadways, patios, walkways, covering underground trench cables and wires for industrial purposes.
      `,
      images: items,
    },
    {
      title: "FENCING PILLAR POSTS",
      description: `
        Barbed wire fencing posts / Chain link fencing posts / Precast boundary wall pillar support / Guard pillar posts.
        Fencing poles offered by us is the right choice for fencing of agricultural land or land under possession. Manufactured by us in a variety of sizes and widths.
        Estimated life of each Fencing Pole is not less than 50 years, and due to this, they are highly demanded in the market. The fencing poles can be supplied in bulk at affordable prices.
      `,
      images: fenceItems,
    },
    // Add more products as needed
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  const CarouselComponent: React.FC<{ images: CarouselItemProps[] }> = ({
    images,
  }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };

    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };

    const slides = images.map((item) => (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          className="image"
          // style={{ height: 400, width: 1200 }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    ));

    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false} // Disable auto-sliding explicitly
      >
        <CarouselIndicators
          items={images}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    );
  };

  return (
    <>
      <TextField
        variant="standard"
        placeholder="Search Tiles"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        margin="normal"
      />
      {/* Only show filtered results if there's a search term */}
      <div className="product-container">
        {(searchTerm ? filteredProducts : products).map((product, index) => (
          <div
            className={`product-section ${
              index % 2 === 0 ? "normal-layout" : "reverse-layout"
            }`}
            key={index}
          >
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
            </div>
            <div className="image-wrapper">
              <CarouselComponent images={product.images} />
            </div>
          </div>
        ))}
      </div>
      {!searchTerm && <UpcomingProduct />}
      <FeatureGrid searchTerm={searchTerm} />
    </>
  );
};

export default ProductInfo;
