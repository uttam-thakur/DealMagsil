"use client";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import {
  dealMagsilLogo,
  phoneNumber,
  whatsappNumber,
} from "@/app/common/constant";
import styles from "./styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.relative}>
      <footer className={styles.footer}>
        <div className={`${styles.footerBorder}`}>
          <img
            src={dealMagsilLogo}
            alt="Cake Heaven Logo"
            className={styles.logo}
          />

          {/* Tailwind CSS class for line color and margin */}
          <div className={styles.aboutSection}>
            <Link href="/aboutus" className={styles.aboutLink}>
              About Us
            </Link>
          </div>
          {/* Follow Us Section */}
          <div className={styles.followSection}>
            <h3 className={styles.followText}>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.iconInsta} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className={styles.iconFacebook} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Contact Us</h3>
              <p className={styles.sectionText}>
                Email:{" "}
                <a
                  href="uttamthakur2016@gmail.com"
                  className={styles.underline}
                >
                  abhradey11@gmail.com
                </a>
              </p>
              <p className={styles.sectionText}>
                Phone:{" "}
                <a href={`tel:+91${phoneNumber}`} className={styles.underline}>
                  {`+91${phoneNumber}`}
                </a>
              </p>
              <p className={styles.sectionText}>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  className={styles.underline}
                >
                  {whatsappNumber}
                </a>
              </p>
            </div>

            {/* Address Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Our Address</h3>
              <p className={styles.sectionText}>Deal Magsil</p>
              <p className={styles.sectionText}>Kalyanpur Hosuing, Asansol</p>
              <p className={styles.sectionText}>Asansol, 713305</p>
            </div>

            {/* Additional Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Additional Info</h3>
              <p className={styles.sectionText}>
                Opening Hours: Everyday, 10 AM - 10 PM
              </p>
              <p className={styles.sectionText}>
                Visit us for quality products!
              </p>
            </div>

            {/* Newsletter Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Newsletter</h3>
              <p className={styles.sectionText}>
                Subscribe for updates on new items and promotions!
              </p>
            </div>
          </div>

          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} Deal Magsil. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
