import React from "react";
import styles from "../../app/components/styles/Client.module.css";

const Clients = () => {
  const clients = [
    { name: "GrayGrids", logo: "/images/clients/1.jpg" },
    { name: "UIdeck", logo: "/images/clients/2.jpg" },
    { name: "Ayro UI", logo: "/images/clients/3.jpg" },
    { name: "Lineicons", logo: "/images/clients/4.jpg" },
    { name: "Ecommerce HTML", logo: "/images/clients/6.jpg" },
    { name: "Ecommerce HTML", logo: "/images/clients/amc.jpg" },
    { name: "Ecommerce HTML", logo: "/images/clients/kei.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/l&t.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/l&tpower.webp" },
    { name: "Ecommerce HTML", logo: "/images/clients/lumino.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/NCC.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/RelianceInfra.webp" },
    { name: "Ecommerce HTML", logo: "/images/clients/sail.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/vol.png" },
    { name: "Ecommerce HTML", logo: "/images/clients/WBSEDCL.webp" },
    {
      name: "Ecommerce HTML",
      logo: "/images/clients/National_Highways_Authority_of_India_logo.svg",
    },
  ];

  return (
    <div className={styles.clientsSection}>
      <h5 className={styles.subHeading}>MEET OUR CLIENTS</h5>
      <h2 className={styles.heading}>Our Awesome Clients</h2>
      <p className={styles.description}>
        "We are incredibly grateful to have worked with such amazing clients.
        Your trust and collaboration inspire us to strive for excellence every
        day. Thank you for being a part of our journey and letting us be a part
        of yours!"
      </p>
      <div className={styles.clientsGrid}>
        {clients.map((client, index) => (
          <div key={index} className={styles.clientCard}>
            <img
              src={client.logo}
              alt={client.name}
              className={styles.clientLogo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
