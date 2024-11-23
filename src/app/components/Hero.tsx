"use client";
import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.introContainer}>
        <p className={styles.introHeading}>
          We take immense pride in contributing to transformative projects that
          redefine possibilities and shape a brighter future.
        </p>
        <p className={styles.introSubHeading}>
          With over 27 years of trusted expertise, we are dedicated to offering
          innovative solutions tailored to your needs. Let us help you create
          spaces that inspire, with products that stand the test of time.
        </p>
        <div className={styles.ctaContainer}>
          <p>Your satisfaction is our priority—visit us today!</p>
        </div>
      </div>
    </div>
  );
}
