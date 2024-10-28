import * as React from "react";
import { Card, Typography } from "@mui/material";
import Image from "next/image"; // Importing the Next.js Image component
import Welcome from "../../../public/images/welcome.jpg"; // Importing from src folder
import AboutUs from "../../../public/images/aboutus.png"; // Importing from src folder
import QualityAss from "../../../public/images/quality1.png"; // Importing from src folder

const WelcomeCard = ({ title, image, description }: any) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 400,
          margin: "0 auto",
          textAlign: "center",
          boxShadow: "none",
        }}
      >
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Image
          src={image} // Pass the imported image as the src
          alt={`${title} image`}
          style={{
            objectFit: "fill",
            margin: "0 auto",
            width: "100%",
            height: "auto",
          }}
        />
      </Card>

      <br />
      <Typography variant="h6" color="text.secondary">
        {description}
      </Typography>

      <div
        style={{
          position: "relative",
          width: "90%",
          margin: "30px auto",
          height: "0.5px",
          backgroundColor: "gray",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "gray",
            borderRadius: "50%",
            position: "absolute",
            top: "-5px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </>
  );
};

export default function App() {
  return (
    <>
      <WelcomeCard
        // title="Welcome"
        image={Welcome} // Using imported image
        description="Precast concrete consists of concrete (a mixture of cement, water,
          aggregates, and admixtures) that is cast into a specific shape at a
          location other than its in-service position. The concrete is placed
          into a form, typically wood or steel, and cured before being stripped
          from the form, usually the following day. These components are then
          transported to the construction site for erection into place."
      />
      {/* Second Card */}
      <WelcomeCard
        // title="About Us"
        image={AboutUs}
        description="Established in 1991, DEAL MAGSIL is a leading manufacturer and supplier of high-quality precast concrete products and interlocking paver blocks. With decades of experience, we uphold strict standards of reliability, quality, and efficiency in every project.

As a registered S.S.I Unit with the Government of West Bengal and certified supplier to organizations like SAIL - IISCO, DVC, L&T, and several Municipal Corporations, DEAL MAGSIL is recognized for its turnkey solutions in prestigious projects, including the National Highway-2 Panagarh-Barwa Adda stretch, Andal Airport, and DVC RTPP Raghunathpur.

With a skilled team and cutting-edge technology, we proudly support infrastructure development across the country, consistently serving both government departments and private sectors."
      />
      {/* Third Card */}
      <WelcomeCard
        // title="Quality Assurance"
        image={QualityAss}
        description="Since 1991, we’ve set benchmarks in construction with our commitment to quality, speed, and innovative technology. Our products are made from 100% virgin raw materials, ensuring premium quality that meets all performance standards.

Our specialized technical team designs and develops a range of cost-effective, eco-friendly concrete products, manufactured with cutting-edge technology and precision. We emphasize durability, aesthetics, and affordability, creating sustainable solutions that surpass conventional products.

With the DEAL MAGSIL brand, we’re proud to provide industry-leading quality, modern technology, and exceptional service across the district, consistently aiming to exceed customer expectations."
      />
    </>
  );
}
