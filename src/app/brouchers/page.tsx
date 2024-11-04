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

const brochures = [
  {
    id: 1,
    title: "Catalogue",
    description:
      "An overview of our offerings products and lookeratives deals.",
    file: "/brochure/DEALMAGSILCatalogue.pdf",
  },
  {
    id: 2,
    title: "React Brochure",
    description: "A complete guide to our React-based products and services.",
    file: "/brochure/react.pdf",
  },
  {
    id: 3,
    title: "UI/UX Design Brochure",
    description: "Detailed insights into our design process and services.",
    file: "/brochure/design.pdf",
  },
  {
    id: 4, // Corrected the ID for the fourth brochure
    title: "Another Brochure",
    description:
      "Further insights into our services for future plans and Upcoming products.",
    file: "/brochure/another.pdf",
  },
];

export default function Brochures() {
  return (
    // <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100
    //  p-8 px-4 py-10 ">
    <main style={{ padding: "2rem", marginTop: "50px" }}>
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-900">
          Download Our Brochures
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
          Get detailed information on our products and services by downloading
          our brochures. Stay up-to-date with the latest insights.
        </p>
      </header>

      {/* Brochure Cards */}
      <CardGroup className="gap-4 px-6 w-full max-w-4xl">
        {brochures.map((brochure) => (
          <Card
            key={brochure.id}
            className="shadow-lg rounded-md overflow-hidden transition-transform transform hover:scale-105 duration-300"
            style={{ width: "100px", margin: "0 auto", borderRadius: "10px" }} // Smaller card size
          >
            <CardImg
              alt="Card image cap"
              src="/images/card1.jpg"
              top
              style={{
                height: "200px",
                width: "70%",
                objectFit: "cover",
                padding: "20px",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                marginLeft: "15%",
                // backgroundColor: "#DEDDE2",
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
                  className="d-flex align-items-center justify-center" // Center aligns the content
                >
                  <PictureAsPdfIcon className="mr-2" />
                  Download
                </Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
    </main>
  );
}
