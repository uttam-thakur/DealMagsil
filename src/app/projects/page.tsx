"use client";

import { useState } from "react";
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
import { projects } from "./projectsConstants";

const ProjectsPage = () => {
  const [showProjectView, setShowProjectView] = useState(false);
  const [selectedProject, setSelectedProject]: any = useState({});

  const onProjectClick = (projectData: any) => {
    setSelectedProject(projectData);
    setShowProjectView(true);
  };

  const onProjectImageViewClose = () => {
    setSelectedProject({});
    setShowProjectView(false);
  };

  return (
    <>
      <div className={styles.mainSection}>
        <div className={styles.introContainer}>
          <p className={styles.introHeading}>
            We take immense pride in contributing to transformative projects
            that redefine possibilities and shape a brighter future.
          </p>
          <p className={styles.introSubHeading}>
            With over 27 years of trusted expertise, we are dedicated to
            offering innovative solutions tailored to your needs. Let us help
            you create spaces that inspire, with products that stand the test of
            time.
          </p>
          <div className={styles.ctaContainer}>
            <p>Your satisfaction is our priority—visit us today!</p>
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
          slidesPerView="auto"
          className={cx(styles.projectSlider, "projects-swiper-outer")}
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
