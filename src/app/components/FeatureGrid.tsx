"use client";
import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import { Typography } from "@mui/material";

import styles from "../components/styles/FeatureGrid.module.css";

type PrecastItem = {
  images: string[];
  title: string;
  description: string;
};
const features = [
  {
    imageSrc: "/images/tiles/dotted.webp",
    title: "DOTTED",
    description:
      "A versatile, dotted pattern tile ideal for adding subtle texture and depth to any space.",
  },
  {
    imageSrc: "/images/tiles/barfi.jfif",
    title: "BARFI",
    description:
      "Inspired by classic Barfi shapes, this tile brings a unique charm with its geometric elegance.",
  },
  {
    imageSrc: "/images/tiles/quarter circle.jfif",
    title: "QUARTER CIRCLE",
    description:
      "Features a unique quarter-circle design, perfect for creating dynamic patterns in floors or walls.",
  },
  {
    imageSrc: "/images/tiles/chequered.jfif",
    title: "CHEQUERED",
    description:
      "A classic chequered pattern that brings a bold, timeless style to interiors and exteriors.",
  },
  {
    imageSrc: "/images/tiles/grey quarter circle.jfif",
    title: "GREY QUARTER CIRCLE",
    description:
      "A subtle, grey-toned quarter-circle tile that provides a modern look with an artistic flair.",
  },
  {
    imageSrc: "/images/tiles/cadburry.jfif",
    title: "CADBURRY",
    description:
      "Rich and smooth, the Cadbury tile adds an elegant, luxurious feel to any surface.",
  },
  {
    imageSrc: "/images/tiles/roof.jfif",
    title: "ROOF TILE",
    description:
      "Durable and weather-resistant, this tile is ideal for roofing with a stylish, traditional look.",
  },
  {
    imageSrc: "/images/tiles/black&white.jfif",
    title: "BLACK AND WHITE CHECKER",
    description:
      "A bold black-and-white checker pattern that enhances spaces with a striking, modern appeal.",
  },
  {
    imageSrc: "/images/tiles/l-shaped.jfif",
    title: "L-SHAPED SAND BLAST",
    description:
      "The L-shaped design with a sandblast finish adds texture and modernity to any project.",
  },
  {
    imageSrc: "/images/tiles/hex.jfif",
    title: "TRI - HEX",
    description:
      "Combines triangular and hexagonal shapes, perfect for creating eye-catching, intricate patterns.",
  },
  {
    imageSrc: "/images/tiles/zig-zag.jfif",
    title: "ZIG - ZAG UNI PAVER",
    description:
      "A unique zig-zag pattern that provides strong interlocking support for outdoor paving needs.",
  },
  {
    imageSrc: "/images/tiles/milano.jfif",
    title: "MILANO",
    description:
      "Elegant and smooth, Milano tiles are designed to bring Italian charm and sophistication to any surface.",
  },
  {
    imageSrc: "/images/tiles/squared shaped stone finish.jfif",
    title: "SQUARED SHAPED STONE FINISH",
    description:
      "Features a natural stone finish that adds earthy tones and texture to floors or walls.",
  },

  {
    imageSrc: "/images/tiles/brick.jfif",
    title: "BRICK SHAPED",
    description:
      "A classic brick shape that offers a rustic, timeless appeal for both indoor and outdoor spaces.",
  },
];

const precastItems: PrecastItem[] = [
  {
    images: ["/images/tiles/dotted.webp", "/images/tiles/barfi.jfif"],
    title: "Boundary wall",
    description:
      "Our product range includes a wide range of Boundary Walls such as Concrete Boundary Walls, Industrial Boundary Walls, Precast RCC Wall Panels, Precast RCC Columns/ Struts/ Posts and many more items.Our offered walls are manufactured from optimum quality materials and advanced technology at our sound manufacturing premises in adherence to the defined industry standards.We have performed strict quality inspection regarding strength and quality of the walls. Thereby, these are widely preferred and appreciated among our clients. In order to meet clients’ specific demands, our entire range is available in various standard length options such as 1800mm , 2100mm , 2400mm and also can be customerized according to client's requirements",
  },

  {
    images: ["/images/tiles/barfi.jfif", "/images/tiles/barfi1.jfif"],
    title: "Cable Cover /Tiles",
    description:
      "Concrete Cable Protection Cover Tiles, also known as Cable Route Markers, are used frequently by utility companies to provide a clear indication to site staff who may be working close to underground electrical cables.The cables and wires are generally used in mechanical lines. These RCC / PCC Cover Slabs are constructed, keeping in view its quality construction. We have been catering to the bulk requirements to attain the satisfaction level of our customer. Moreover, our offered price range has helped in earning the trust of our customers.On request, bespoke covers can be manufactured to order for other services such as Telephone, Gas, Oil, Chemicals, Fibre Optics, etc.",
  },
  {
    images: ["/images/tiles/barfi.jfif", "/images/tiles/barfi1.jfif"],
    title: "Precast RCC Drains",
    description:
      "We are one of the topmost manufacturers and supplier of a wide range of Precast R.C.C. Drains in our domain.  These drains have holes and permit the collected water to get discharges into another drainage system. Designed by experienced and knowledgeable professionals, these drains exhibit optimum operational features.Precast U / V- Shaped Drains of various sizes for drainage of water along road sides, and in commercial, residential, and industrial areas. These products are made available to the customers in varied specifications, in order to meet their diverse requirements effectively.We are offering a wide range of Precast Concrete Box Culverts provide high flow capacity even where there is low gradient or headroom is not allowed. Our range of precast concrete box culverts are highly durable and can be easily installed on the site. Each Box Culverts are individually designed so as to cater to a varied external loading conditions.We accept Order of Precast Drains only in Bulk /Huge Quantities.",
  },

  {
    images: ["/images/tiles/barfi.jfif", "/images/tiles/barfi1.jfif"],
    title: "Precast Kerb Stone",
    description:
      "We are a prominent manufacturer & supplier of huge assortment of Kerbstone, Precast Concrete Kerb Stones, Curbstone; that are widely used in construction sector and available in various sizes and shapes.We are concerned in offering an adequate range of Kerb Stones which have Cutting - Edge Or Champhered Edge Finish as per client's requirements. These are manufactured using the quality raw material and are widely used in the construction industries using Vibration or Hydraullic Manufacturing Process.Various tests are done by our quality controllers in order to achieve prevailing industrial standards. Apart from these, we offer these ranges to the clients at market-leading prices with Durability & Dimensions & Designs.",
  },
  {
    images: ["/images/tiles/barfi.jfif", "/images/tiles/barfi1.jfif"],
    title: "Precast Garbage Bin",
    description:
      "We Manufacture and Supply a range of RCC Garbage Bins to best of its quality.The RCC Garbage Bins conform to the standards and are made available in a variety of classes and sizes according to local Municipal Corporations.Known for their superior strength and resistance to damage, the Reinforced Cement Concrete Garbage Bins are made available at reasonable rates for the clients.The Garbage bins are heavy enough so that it will not be moved around or stolen. They are not easy to turn over. The Bins are suitable for large standard size plastic refuse bags that fold over the top for good hygiene and easy service which are generally preferred in Municipal Cleaning.",
  },
  {
    images: ["/images/tiles/barfi.jfif", "/images/tiles/barfi1.jfif"],
    title: "Precast Water Tank",
    description:
      "​We are a progressive company based on Asansol with the mission of becoming the premier Precast Concrete Water Tank and Precast Septic Tank manufacturers in Burdwan District.We pride ourselves on manufacturing high quality concrete water tanks and providing the best professional service.We manufacture a diverse range of Precast Overhead Water Tank supplied to a wide cliental base that includes local governments, civil & mining contractors, project builders, plumbing and landscaping specialists across the domain on a bulk quantity only.Quality, pricing and availability of various sizes of the range of Precast Water Storage Tanks has positioned us a pioneer supplier of these products in our area.",
  },
  {
    images: ["/images/tiles/barfi.jfif", "/images/tiles/barfi1.jfif"],
    title: "Precast Concrete Block",
    description:
      "We are one of the leading manufacturers of Concrete Blocks and hence widely appreciated in the entire domestic market for the fine quality of our products.These concrete blocks are sturdy in build and are extremely appreciated in the markets due to their environment friendly nature and manufactured from natural raw materials.These are not only resistant to fire but do not emit any toxic gas when exposed to fire. Available in even sizes these help in creating even and polished walls with minimum plastering.Our Concrete Blocks are well-known for features like fascinating designs, durable finish standards, sturdiness and easy installation.",
  },

  {
    images: ["/images/tiles/barfi.jfif", "/images/tiles/barfi1.jfif"],
    title: "Precast Cement Products",
    description:
      "We are a leading supplier and processor of all allied precast concrete products no matter how bulk the quantity is.You provide us your requirement in precasting and we will deliver you our best solution and service.We produce Precast Concrete Products From 50 lbs to 10 tons, no matter what shape or size we meet the commitments.(But we entertain requirements of special designed Precast Products only in Bulk / Huge Quantities requirement.All our products are processed from high quality raw materials which make the construction of various products durable, structurally sound, versatile and economic as compared to Cast-In-Situ Procedure. ​Honesty, impeccable quality, on time delivery, affordable pricing and customer satisfaction has helped us maintain a close association with our clients.",
  },
];
interface FeatureGridProps {
  searchTerm: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ searchTerm }) => {
  const filteredFeatures = features.filter((feature) =>
    feature.title.toLowerCase().includes(searchTerm)
  );
  return (
    <>
      <Typography
        className={styles.customTitle} // Adjust color and font size using Tailwind CSS
        variant="h4"
        component="h2"
        gutterBottom
      >
        DIFFRENT TYPES OF TILES
      </Typography>

      <div className={styles.featureGrid}>
        {filteredFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            imageSrc={feature?.imageSrc}
            title={feature?.title}
            description={feature?.description}
          />
        ))}
      </div>
    </>
  );
};

export default FeatureGrid;
