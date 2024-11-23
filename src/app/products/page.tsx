"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import UpcomingProduct from "../components/UpcomingProduct";
import FeatureGrid from "../components/FeatureGrid";
import FeatureGridSlider from "../components/FeatureGridSlider";
import { products } from "./ProductsConstants";

const ProductInfo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handles input changes for search term
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filters products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div style={{ backgroundColor: "rgb(244, 244, 244)" }}>
      <div className={styles.main}>
        <div className={styles.introContainer}>
          <p className={styles.introHeading}>
            Discover Premium Precast Cement Products
          </p>
          <p className={styles.introSubHeading}>
            Explore our wide range of durable and versatile precast items,
            perfect for construction, urban design, and landscaping.
          </p>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchbar}
        />
      </div>

      {/* Feature Grid */}
      <FeatureGrid searchTerm={searchTerm} />
      <FeatureGridSlider />

      {/* Upcoming Products (only show when no search term) */}
      {!searchTerm && <UpcomingProduct />}

      {/* Product List Section */}
      <div className={styles.productContainer}>
        {(searchTerm ? filteredProducts : products).length === 0 ? (
          <p className={styles.noResults}>Data not available</p> // Message when no results
        ) : (
          (searchTerm ? filteredProducts : products).map((product, index) => (
            <div
              className={`${styles.productSection} ${
                index % 2 === 0 ? styles.normalLayout : styles.reverseLayout
              }`}
              key={index}
            >
              {/* Product Content Goes Here (Image, Title, Description, etc.) */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
