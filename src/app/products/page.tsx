'use client'

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './page.css';
import UpcomingProduct from '../components/UpcomingProduct';

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

const fenceItems = [
  {
    src: 'http://nebula.wsimg.com/f6f02f85f065096f57161ffd21c2a893?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'http://nebula.wsimg.com/f6f02f85f065096f57161ffd21c2a893?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'http://nebula.wsimg.com/f6f02f85f065096f57161ffd21c2a893?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

const ProductInfo = () => {
  const products = [
    {
      title: 'PRECAST SLABS',
      description: `
        Reinforced Cement Concrete / Plain Cement Concrete.
        We manufacture Precast Slabs using various raw materials of high-grade. The array of slabs we offer is highly appreciated due to excellent stress-bearing capacity, aesthetics, and the sheer variety offered in terms of dimensions and designs.
        These covering slabs can be used for driveways, roadways, patios, walkways, covering underground trench cables and wires for industrial purposes.
      `,
      images: items, 
    },
    {
      title: 'FENCING PILLAR POSTS',
      description: `
        Barbed wire fencing posts / Chain link fencing posts / Precast boundary wall pillar support / Guard pillar posts.
        Fencing poles offered by us is the right choice for fencing of agricultural land or land under possession. Manufactured by us in a variety of sizes and widths.
        Estimated life of each Fencing Pole is not less than 50 years, and due to this, they are highly demanded in the market. The fencing poles can be supplied in bulk at affordable prices.
      `,
      images: fenceItems, 
    },
    // Add more products as needed
  ];

  const CarouselComponent = ({ images }:any) => {
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

    const goToIndex = (newIndex:any) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };

    const slides = images.map((item:any) => (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    ));

    return (
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  };

  return (
    <>
    <div className="product-container">
      {products.map((product, index) => (
        <div className={`product-section ${index % 2 === 0 ? 'normal-layout' : 'reverse-layout'}`} key={index}>
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

<UpcomingProduct/>


      </>
  );
};

export default ProductInfo;

