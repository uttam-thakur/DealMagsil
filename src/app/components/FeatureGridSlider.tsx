"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import Modal from "./common-components/Modal";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type PrecastItem = {
  images: string[];
  title: string;
  description: string;
};

const precastItems: PrecastItem[] = [
  {
    images: [
      "/images/products/Precast Slabs/1.jpg",
      "/images/products/Precast Slabs/2.jpg",
      "/images/products/Precast Slabs/3.jpg",
      "/images/products/Precast Slabs/4.jpg",
      "/images/products/Precast Slabs/5.jpg",
      "/images/products/Precast Slabs/6.jpg",
      "/images/products/Precast Slabs/7.jpg",
      "/images/products/Precast Slabs/8.webp",
    ],
    title: "Precast Slabs",
    description:
      "Reinforced Cement Concrete / Plain Cement Concrete. We manufacture Precast Slabs using various raw materials of high-grade. The array of slabs we offer is highly appreciated due to excellent stress-bearing capacity, aesthetics, and the sheer variety offered in terms of dimensions and designs. These covering slabs can be used for driveways, roadways, patios, walkways, covering underground trench cables and wires for industrial purposes.",
  },
  {
    images: [
      "/images/products/Fencing Poles/1.jpg",
      "/images/products/Fencing Poles/2.jpg",
      "/images/products/Fencing Poles/3.jpg",
      "/images/products/Fencing Poles/4.jpg",
      "/images/products/Fencing Poles/5.jpg",
      "/images/products/Fencing Poles/6.jpg",
      "/images/products/Fencing Poles/7.jpg",
    ],
    title: "Fencing Pillar Post",
    description:
      "Barbed wire fencing posts / Chain link fencing posts / Precast boundary wall pillar support / Guard pillar posts. Fencing poles offered by us is the right choice for fencing of agricultural land or land under possession. Manufactured by us in a variety of sizes and widths. Estimated life of each Fencing Pole is not less than 50 years, and due to this, they are highly demanded in the market. The fencing poles can be supplied in bulk at affordable prices",
  },
  {
    images: [
      "/images/products/Precast Boundary Walls/1.jpg",
      "/images/products/Precast Boundary Walls/2.jpg",
      "/images/products/Precast Boundary Walls/3.jpg",
      "/images/products/Precast Boundary Walls/4.jpg",
      "/images/products/Precast Boundary Walls/5.webp",
      "/images/products/Precast Boundary Walls/6.webp",
    ],
    title: "Boundary wall",
    description:
      "Our product range includes a wide range of Boundary Walls such as Concrete Boundary Walls, Industrial Boundary Walls, Precast RCC Wall Panels, Precast RCC Columns/ Struts/ Posts and many more items.Our offered walls are manufactured from optimum quality materials and advanced technology at our sound manufacturing premises in adherence to the defined industry standards.We have performed strict quality inspection regarding strength and quality of the walls. Thereby, these are widely preferred and appreciated among our clients. In order to meet clients’ specific demands, our entire range is available in various standard length options such as 1800mm , 2100mm , 2400mm and also can be customerized according to client's requirements",
  },

  {
    images: [
      "/images/products/precast cable cover/1.jpeg",
      "/images/products/precast cable cover/2.webp",
      "/images/products/precast cable cover/3.jfif",
      "/images/products/precast cable cover/4.webp",
      "/images/products/precast cable cover/5.jpeg",
    ],
    title: "Cable Cover /Tiles",
    description:
      "Concrete Cable Protection Cover Tiles, also known as Cable Route Markers, are used frequently by utility companies to provide a clear indication to site staff who may be working close to underground electrical cables.The cables and wires are generally used in mechanical lines. These RCC / PCC Cover Slabs are constructed, keeping in view its quality construction. We have been catering to the bulk requirements to attain the satisfaction level of our customer. Moreover, our offered price range has helped in earning the trust of our customers.On request, bespoke covers can be manufactured to order for other services such as Telephone, Gas, Oil, Chemicals, Fibre Optics, etc.",
  },
  {
    images: [
      "/images/products/Precast Drains/1.jpg",
      "/images/products/Precast Drains/2.webp",
      "/images/products/Precast Drains/3.jpg",
      "/images/products/Precast Drains/4.webp",
      "/images/products/Precast Drains/5.jpg",
      "/images/products/Precast Drains/6.jpg",
    ],
    title: "Precast RCC Drains",
    description:
      "We are one of the topmost manufacturers and supplier of a wide range of Precast R.C.C. Drains in our domain.  These drains have holes and permit the collected water to get discharges into another drainage system. Designed by experienced and knowledgeable professionals, these drains exhibit optimum operational features.Precast U / V- Shaped Drains of various sizes for drainage of water along road sides, and in commercial, residential, and industrial areas. These products are made available to the customers in varied specifications, in order to meet their diverse requirements effectively.We are offering a wide range of Precast Concrete Box Culverts provide high flow capacity even where there is low gradient or headroom is not allowed. Our range of precast concrete box culverts are highly durable and can be easily installed on the site. Each Box Culverts are individually designed so as to cater to a varied external loading conditions.We accept Order of Precast Drains only in Bulk /Huge Quantities.",
  },

  {
    images: [
      "/images/products/Kerbstones/1.jpg",
      "/images/products/Kerbstones/2.jpg",
      "/images/products/Kerbstones/3.jpg",
      "/images/products/Kerbstones/4.jpg",
      "/images/products/Kerbstones/5.jpg",
      "/images/products/Kerbstones/6.jpg",
      "/images/products/Kerbstones/7.jpg",
      "/images/products/Kerbstones/8.jpg",
      "/images/products/Kerbstones/9.jpg",
    ],
    title: "Precast Kerb Stone",
    description:
      "We are a prominent manufacturer & supplier of huge assortment of Kerbstone, Precast Concrete Kerb Stones, Curbstone; that are widely used in construction sector and available in various sizes and shapes.We are concerned in offering an adequate range of Kerb Stones which have Cutting - Edge Or Champhered Edge Finish as per client's requirements. These are manufactured using the quality raw material and are widely used in the construction industries using Vibration or Hydraullic Manufacturing Process.Various tests are done by our quality controllers in order to achieve prevailing industrial standards. Apart from these, we offer these ranges to the clients at market-leading prices with Durability & Dimensions & Designs.",
  },
  {
    images: [
      "/images/products/Precast garbag bin/1.jpg",
      "/images/products/Precast garbag bin/2.jfif",
      "/images/products/Precast garbag bin/3.jfif",
      "/images/products/Precast garbag bin/4.jpg",
    ],
    title: "Precast Garbage Bin",
    description:
      "We Manufacture and Supply a range of RCC Garbage Bins to best of its quality.The RCC Garbage Bins conform to the standards and are made available in a variety of classes and sizes according to local Municipal Corporations.Known for their superior strength and resistance to damage, the Reinforced Cement Concrete Garbage Bins are made available at reasonable rates for the clients.The Garbage bins are heavy enough so that it will not be moved around or stolen. They are not easy to turn over. The Bins are suitable for large standard size plastic refuse bags that fold over the top for good hygiene and easy service which are generally preferred in Municipal Cleaning.",
  },
  {
    images: [
      "/images/products/Precast Water Tank/1.jpg",
      "/images/products/Precast Water Tank/2.webp",
      "/images/products/Precast Water Tank/3.jpg",
    ],
    title: "Precast Water Tank",
    description:
      "​We are a progressive company based on Asansol with the mission of becoming the premier Precast Concrete Water Tank and Precast Septic Tank manufacturers in Burdwan District.We pride ourselves on manufacturing high quality concrete water tanks and providing the best professional service.We manufacture a diverse range of Precast Overhead Water Tank supplied to a wide cliental base that includes local governments, civil & mining contractors, project builders, plumbing and landscaping specialists across the domain on a bulk quantity only.Quality, pricing and availability of various sizes of the range of Precast Water Storage Tanks has positioned us a pioneer supplier of these products in our area.",
  },
  {
    images: [
      "/images/products/Precast Concrete Block/1.jpg",
      "/images/products/Precast Concrete Block/2.webp",
      "/images/products/Precast Concrete Block/3.webp",
      "/images/products/Precast Concrete Block/4.jfif",
      "/images/products/Precast Concrete Block/5.jpg",
      "/images/products/Precast Concrete Block/6.jpg",
    ],
    title: "Precast Concrete Block",
    description:
      "We are one of the leading manufacturers of Concrete Blocks and hence widely appreciated in the entire domestic market for the fine quality of our products.These concrete blocks are sturdy in build and are extremely appreciated in the markets due to their environment friendly nature and manufactured from natural raw materials.These are not only resistant to fire but do not emit any toxic gas when exposed to fire. Available in even sizes these help in creating even and polished walls with minimum plastering.Our Concrete Blocks are well-known for features like fascinating designs, durable finish standards, sturdiness and easy installation.",
  },

  {
    images: [
      "/images/products/Precast Cement Products/1.avif",
      "/images/products/Precast Cement Products/2.jpg",
      "/images/products/Precast Cement Products/3.avif",
      "/images/products/Precast Cement Products/4.jpg",
      "/images/products/Precast Cement Products/5.webp",
      "/images/products/Precast Cement Products/6.webp",
    ],
    title: "Precast Cement Products",
    description:
      "We are a leading supplier and processor of all allied precast concrete products no matter how bulk the quantity is.You provide us your requirement in precasting and we will deliver you our best solution and service.We produce Precast Concrete Products From 50 lbs to 10 tons, no matter what shape or size we meet the commitments.(But we entertain requirements of special designed Precast Products only in Bulk / Huge Quantities requirement.All our products are processed from high quality raw materials which make the construction of various products durable, structurally sound, versatile and economic as compared to Cast-In-Situ Procedure. ​Honesty, impeccable quality, on time delivery, affordable pricing and customer satisfaction has helped us maintain a close association with our clients.",
  },
];

const NextArrow = ({ onClick }: any) => (
  <ArrowForwardIosIcon
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#000",
      zIndex: 2,
    }}
  />
);

const PrevArrow = ({ onClick }: any) => (
  <ArrowBackIosIcon
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#000",
      zIndex: 2,
    }}
  />
);

const FeatureGridSlider = () => {
  const [selectedItem, setSelectedItem] = useState<PrecastItem | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleOpenModal = (item: PrecastItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div style={{ backgroundColor: "rgb(255, 249, 249)" }}>
        <Typography
          variant="h5"
          sx={{
            marginTop: "1rem",
            fontWeight: "700",
            fontSize: { xs: "1.2rem", md: "2rem" },
            color: "gray",
            textAlign: "center",
          }}
        >
          PRECAST PRODUCTS
        </Typography>
        <Box sx={{ padding: "16px" }}>
          <Grid container spacing={3}>
            {precastItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    padding: "1rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Slider {...settings}>
                    {item.images.map((image, imgIndex) => (
                      <CardMedia
                        key={imgIndex}
                        component="img"
                        image={image}
                        alt={`Slide ${imgIndex} for ${item.title}`}
                        sx={{
                          width: "100%",
                          maxHeight: "200px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    ))}
                  </Slider>

                  <CardContent
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        marginBottom: "0.5rem",
                        fontWeight: "700",
                        textAlign: "left",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ marginBottom: "1rem", textAlign: "left" }}
                    >
                      {item.description.substring(0, 120)}...
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => handleOpenModal(item)}
                      sx={{
                        backgroundColor: "transparent",
                        borderColor: "blue", // Outline color
                        color: "rgb(21,80,139)", // Text color                        "&:hover": {
                        "&:hover": {
                          backgroundColor: "rgb(24, 92, 160)", // Optional hover effect
                          borderColor: "rgb(21,80,139)",
                          color: "white",
                        },
                      }}
                    >
                      READ MORE
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {selectedItem && (
            <Modal open={!!selectedItem}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: { xs: "1rem", md: "2rem" },
                  borderRadius: "10px",
                  width: { xs: "90%", md: "60%" },
                  maxHeight: "80vh",
                  overflowY: "auto",
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "1rem",
                    fontWeight: "700",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  {selectedItem.title}
                </Typography>

                <Grid
                  container
                  spacing={2}
                  sx={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {selectedItem.images.map((image, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      key={index}
                      sx={{
                        padding: "0.5rem",
                      }}
                    >
                      <img
                        src={image}
                        alt={`${selectedItem.title} - Slide ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "10px",
                          // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 6px rgba(0, 0, 0, 0.15)";
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Typography
                  variant="body2"
                  sx={{
                    margin: "1rem 0",
                    lineHeight: "1.5",
                    letterSpacing: "1px",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {selectedItem.description}
                </Typography>

                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleCloseModal}
                  sx={{
                    marginTop: "1rem",
                    fontSize: { xs: "0.8rem", md: "1rem" },
                    backgroundColor: "rgb(21,80,139)",
                    "&:hover": {
                      backgroundColor: "darkred", // Optional hover effect
                    },
                    color: "white",
                  }}
                >
                  Close
                </Button>
              </Box>
            </Modal>
          )}
        </Box>
      </div>
    </>
  );
};

export default FeatureGridSlider;
