"use client";

import { useRef, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import cx from "classnames";
import Client from "../components/Clients";
import ProjectSlider from "../components/common-components/ProjectSlider";
import ProjectsViewer from "../components/common-components/ProjectViewer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./page.css";
import styles from "./styles.module.css";

const ProjectsPage = () => {
  const [showProjectView, setShowProjectView] = useState(false);
  const [selectedProject, setSelectedProject]: any = useState({});

  const onProjectClick = (projectData: any) => {
    console.log(projectData);
    setSelectedProject(projectData);
    setShowProjectView(true);
  };

  const onProjectImageViewClose = () => {
    setSelectedProject({});
    setShowProjectView(false);
  };

  const projectImages = [
    {
      src: "http://nebula.wsimg.com/771ab2bfa3b9e09ea31fdceba426a468?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption One",
    },
    {
      src: "http://nebula.wsimg.com/f6015bbd9f5324e34f51967bd44ecb2b?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption One",
    },
    {
      src: "http://nebula.wsimg.com/9f5ffb7e03cdfc03c1b0ff6badbc0dc8?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption Two",
    },
    {
      src: "http://nebula.wsimg.com/209e8de253675b6fbe561e29c7f0f6f7?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption Two",
    },
    {
      src: "http://nebula.wsimg.com/63efeadc42b8d9f889f915dcbea58452?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption Two",
    },
    {
      src: "http://nebula.wsimg.com/63efeadc42b8d9f889f915dcbea58452?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption Three",
    },
  ];

  const projectImages1 = [
    {
      src: "http://nebula.wsimg.com/771ab2bfa3b9e09ea31fdceba426a468?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption ten",
    },
    {
      src: "http://nebula.wsimg.com/f6015bbd9f5324e34f51967bd44ecb2b?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption nine",
    },
    {
      src: "http://nebula.wsimg.com/9f5ffb7e03cdfc03c1b0ff6badbc0dc8?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption eight",
    },
    {
      src: "",
      caption: "Caption seven",
    },
    {
      src: "http://nebula.wsimg.com/63efeadc42b8d9f889f915dcbea58452?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption six",
    },
  ];

  const projectImages2 = [
    {
      src: "http://nebula.wsimg.com/771ab2bfa3b9e09ea31fdceba426a468?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption five",
    },
    {
      src: "http://nebula.wsimg.com/f6015bbd9f5324e34f51967bd44ecb2b?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption six",
    },
    {
      src: "http://nebula.wsimg.com/9f5ffb7e03cdfc03c1b0ff6badbc0dc8?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption seven",
    },
    {
      src: "http://nebula.wsimg.com/209e8de253675b6fbe561e29c7f0f6f7?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption eight",
    },
    {
      src: "http://nebula.wsimg.com/63efeadc42b8d9f889f915dcbea58452?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption nine",
    },
    {
      src: "http://nebula.wsimg.com/63efeadc42b8d9f889f915dcbea58452?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption ten",
    },
  ];
  const projects = [
    {
      name: "Asansol (PAHARPUR COOLING TOWERS)",
      title: "​PAVER BLOCKS , GRASS PAVERS SUPPLYING & EXECUTION",
      images: [...projectImages],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: "PINNACLE HONDA Showroom (Asansol)",
      title: "​PAVER BLOCKS , GRASS PAVERS",
      images: [...projectImages1],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: "NATIONAL HIGHWAY (NH-2)  ( PANAGARH to BARBADDA STRETCH)",
      title: "FENCING PILLARS ",
      images: [...projectImages1],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " BAPL Andal AIRPORT (Asansol)",
      title: " RCC TILES SLABS OVER CABLE LINES",
      images: [...projectImages1],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " NATIONAL HIGNWAY (NH-2) & KMDA Baidyabati Water Treatment Plant",
      title: "PRECAST INTERLOCKING DRAINS",
      images: [...projectImages1],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: "DVC RAGHUNATHPUR THERMAL POWER PLANT (Purulia)",
      title: "PRECAST RCC SLABS ",
      images: [...projectImages1],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: "TRANSDAMODAR COAL MINING (P) (Barjora)",
      title: "PRECAST COMPOUND WALL BOUNDARY",
      images: [...projectImages1],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: "DVC - MEJHIA THERMAL POWER STATION (MTPS) (Bankura)",
      title: "PRECAST GAURD POSTS & FENCING PILLARS",
      images: [...projectImages1],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " SAIL - IISCO (Burnpur Steel Plant)",
      title: " RAILWAY SLEEPERS",
      images: [...projectImages1],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " JHONSON TILES PLANT (PANAGARH) ",
      title: " GRASS PAVERS ",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " L&T CONSTRUCTIONS (Bankura)",
      title: " RCC STEP OF STAIRCASE",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: "ASANSOL MUNICIPAL CORPORATION  (Asansol)",
      title: " PAVER BLOCKS",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: "DUMKA MUNICIPAL CORPORATION BUS TERMINAL (Asansol)",
      title: "PAVER BLOCKS",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " ARMY BASE CAMP (Panagarh)",
      title: " PRECAST CONCRETE BLOCKS ",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " Maithon Hydral Power Station  (Maithon)",
      title: " DESIGNER TILES ",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " BHARAT PETROLEUM CORPORATION LIMITED (BPCL) PUMP (Jharkhand)",
      title: " PAVER BLOCKS",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " RELIANCE CEMENT PLANT ,  RAGHUNATHPUR (PURULIA)",
      title: " PRECAST RCC WATER TANKS",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " ASANSOL / DURGAPUR MUNICIPAL CORPORATION (AMC / DMC)",
      title: "PRECAST RCC GARBAGE BINS",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: "  WBSEDCL (Electricity Department) & NATIONAL HIGHWAY (NH-2)",
      title: "PRECAST RCC SLABS ",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
    {
      name: " INDIAN OIL CORPOTATION LIMITED & NATIONAL HIGHWAY (NH-2)",
      title: "PRECAST CRASH BARRIERS",
      images: [...projectImages2],
      products: [
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
        "Bricks",
        "coils",
        "roads",
        "cements",
        "bench",
        "dustbeens",
      ],
    },
  ];

  return (
    <>
      <div className={styles.main}>
        <div className={styles.para}>
          <p
            style={{
              color: "#fdba74",
              fontSize: "30px",
              fontWeight: "400",
              letterSpacing: "1.2px",
            }}
          >
            We take immense pride in contributing to transformative projects
            that redefine possibilities and shape a brighter future.
          </p>
          <p>
            With over 27 years of trusted expertise, we are dedicated to
            offering innovative solutions tailored to your needs. Let us help
            you create spaces that inspire, with products that stand the test of
            time.
          </p>
          <div
            style={{
              border: "1px solid #fdba74",
              // height: "150px",
              height: "auto",
              padding: "5px",
              fontSize: "31px",
              borderRadius: "8px",
              marginTop: "80px",
            }}
          >
            <p>
              Your satisfaction is our priority—visit us today and explore the
              difference we can make together!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.projectSection}>
        <div className={styles.projectGreeting}>
          <h1 className={styles.projectHeading}>Building the Future</h1>
          <h3 className={styles.projectDescription}>
            At Deal Magsil, we take pride in being a trusted supplier of
            high-quality products, including pavement bricks, dustbins, and a
            variety of brick types. Our materials have played a key role in
            numerous infrastructure developments, including prestigious
            government projects.
          </h3>
        </div>
        <Swiper
          navigation
          modules={[Pagination]}
          slidesPerView={"auto"}
          className={cx(styles.projectSlider, "projects-swiper")}
          pagination={{ clickable: true }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <ProjectSlider
                images={project.images}
                name={project.name}
                title={project?.title}
                products={project?.products}
                onClick={onProjectClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ProjectsViewer
        onClose={onProjectImageViewClose}
        images={selectedProject?.images}
        showProjectView={showProjectView}
      />

      <Client />
    </>
  );
};

export default ProjectsPage;
