"use client";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Styles from "./page.module.css";
const brochures = [
  {
    id: 1,
    title: "Catalogue",
    description:
      "An overview of our offerings products and lookeratives deals.",
    file: "/brochure/DEALMAGSILCatalogue.pdf",
    image:
      "https://i.pinimg.com/736x/39/c9/6f/39c96f566d55eff2bf3d273bb41a8037.jpg",
  },
  {
    id: 2,
    title: "Tiles Brochure",
    description: "A complete guide to our React-based products and services.",
    file: "/brochure/tiles brouchure.pdf",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFe-4mMn4TW-r6aHxzUGyC6tUrrWXVYskOnqvhMuz1TeoKpOA-qgkgUeF0PofGftlywp8&usqp=CAU",
  },
  {
    id: 3,
    title: "Pavor Tiles Brochure",
    description: "Detailed insights into our design process and services.",
    file: "/brochure/PaversTileCatalogue.pdf",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    title: "Interlock Tiles Brochure",
    description:
      "Further insights into our services for future plans and Upcoming products.",
    file: "/brochure/Interlock.pdf",
    image:
      "https://5.imimg.com/data5/ES/ON/ZO/SELLER-19184459/office-parking-tile-500x500.jpg",
  },

  {
    id: 5,
    title: "Precast Product Brochure",
    description:
      "Further insights into our services for future plans and Upcoming products.",
    file: "/brochure/PrecastCatalog.pdf",
    image:
      "https://e7.pngegg.com/pngimages/118/628/png-clipart-precast-concrete-reinforced-concrete-building-materials-mortar-concrete-tile-architectural-element.png",
  },
];

export default function Brochures() {
  return (
    <>
      <div className={Styles.main}>
        <main style={{ padding: "2rem", marginTop: "50px", zIndex: 1 }}>
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-blue-900">
              Download Our Brochures
            </h1>
            <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
              Get detailed information on our products and services by
              downloading our brochures. Stay up-to-date with the latest
              insights.
            </p>
          </header>

          {/* Brochure Cards */}
          <CardGroup className="gap-4 px-6 w-full max-w-4xl">
            {brochures.map((brochure) => (
              <Card
                key={brochure.id}
                className="shadow-lg rounded-md overflow-hidden transition-transform transform hover:scale-105 duration-300  mx-auto"
                style={{ borderRadius: "10px", opacity: "0.9" }}
              >
                <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56">
                  <CardImg
                    alt="Card image cap"
                    src={brochure.image}
                    top
                    style={{
                      height: "200px",
                      width: "70%",
                      objectFit: "cover",
                      padding: "20px",
                      borderBottomLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                      marginLeft: "15%",
                    }}
                  />
                  <CardBody className="text-center p-4">
                    <CardTitle tag="h5" className="font-bold text-blue-800">
                      {brochure.title}
                    </CardTitle>

                    <CardText className="text-gray-600 mb-4">
                      {brochure.description}
                    </CardText>
                    <Link href={brochure.file} target="_blank" download>
                      <Button
                        color="transparent"
                        style={{
                          border: "1px solid #007bff",
                          backgroundColor: "transparent",
                          height: "40px",
                          borderRadius: "5px",
                        }}
                        className="d-flex align-items-center justify-center"
                      >
                        <PictureAsPdfIcon className="mr-2" />
                        Download
                      </Button>
                    </Link>
                  </CardBody>
                </div>
              </Card>
            ))}
          </CardGroup>
        </main>
      </div>
    </>
  );
}
