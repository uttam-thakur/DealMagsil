import Image from "next/image";
import styles from "../components/styles/welcomeCard.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Section 1 */}
      <div className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/welcome.jpg"
            alt="Virtual Property Exploration"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            The Process and Benefits of Precast Concrete
          </h2>
          <p className={styles.subtitle}>Explore Anywhere, Anytime</p>
          <ul className={styles.list}>
            <li>
              Precast concrete consists of concrete that is cast into a specific
              shape at a location other than its in-service position. These
              components are then transported to the construction site for
              erection into place.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 2 */}
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/quality1.png"
            alt="On-Site Expertise"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>On-Site Expertise</h2>
          <p className={styles.subtitle}>Trust in Our Specialists</p>
          <ul className={styles.list}>
            <li>
              Since 1991, we’ve set benchmarks in construction with quality and
              innovative technology. Our products emphasize durability,
              aesthetics, and affordability to create sustainable solutions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
