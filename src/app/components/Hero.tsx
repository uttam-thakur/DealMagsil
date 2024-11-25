"use client";
import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.introContainer}>
        <p className={styles.introHeading}>
          <span style={{ color: "#fdba74" }}> Welcome to Deal Magsil —</span>
          <span style={{ fontSize: "1.8rem" }}>
            {" "}
            Where Innovation Meets Durability! We warmly welcome you to a world
            of exceptional craftsmanship and timeless elegance.
          </span>
        </p>
        <p className={styles.introSubHeading}>
          Create Spaces That Speak to You Our mission is to bring your ideas to
          life by offering tailored solutions that stand the test of time. With
          an extensive collection of designs, textures, and finishes, we help
          you create spaces that are as functional as they are beautiful.
        </p>
        <p className={styles.introSubHeading}>
          Your satisfaction is our pride. Let’s build something extraordinary
          together. Welcome to a partnership that values your trust and delivers
          excellence in every detail.
        </p>
        <div className={styles.ctaContainer}>
          <p>Visit Us Today—Where Dreams Become Reality!</p>
        </div>
      </div>
    </div>
  );
}
