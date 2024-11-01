"use client";

import { useEffect, useRef, useState } from "react";
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./styles/SocialIcons.module.css";

const SocialIcons: React.FC = () => {
  const [showIcons, setShowIcons] = useState(false);
  const iconsRef = useRef<Array<HTMLDivElement | any>>([]);

  const handleProfileClick = () => {
    setShowIcons((prev) => !prev);
  };

  useEffect(() => {
    if (showIcons) {
      iconsRef.current.forEach((icon: HTMLDivElement, idx: number) => {
        if (icon) {
          icon.style.opacity = "0";
          icon.style.position = "absolute";
          icon.style.top = "50%";
          icon.style.left = "50%";
          icon.style.transform = "translate(-50%, -50%)";

          setTimeout(() => {
            icon.style.opacity = "1";
            icon.style.transition =
              "top 0.5s ease, left 0.5s ease, opacity 0.5s ease";
            // Positions for each icon in a circular formation
            const positions = [
              { top: "20%", left: "40%" },
              { top: "20%", left: "60%" },
              { top: "40%", left: "30%" },
              { top: "40%", left: "70%" },
              { top: "60%", left: "40%" },
              { top: "60%", left: "60%" },
              { top: "80%", left: "50%" },
            ];
            const position = positions[idx % positions.length];
            icon.style.top = position.top;
            icon.style.left = position.left;
          }, idx * 250);
        }
      });
    }
  }, [showIcons]);

  return (
    <div className={styles.container}>
      <img
        className={styles.profilePic}
        src="/images/feedback/3.jfif"
        alt="Profile Picture"
        onClick={handleProfileClick} // Show icons on click
      />
      {showIcons && (
        <div className={styles.social}>
          {[
            "twitter",
            // "github",
            // "stack-overflow",
            // "code",
            "google-plus",
            "linkedin",
            "envelope",
            // "facebook",
            // "whatsapp",
            // "instagram",
          ].map((icon, idx) => (
            <i
              key={icon}
              ref={(el): any => (iconsRef.current[idx] = el)}
              id={icon}
              className={`fab fa-${icon} ${styles.icon}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialIcons;
