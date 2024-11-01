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

import ".././projects/page.css";
import styles from "./page.module.css";

const ProjectsPage = () => {
  const [showProjectView, setShowProjectView] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

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
      src: "http://nebula.wsimg.com/209e8de253675b6fbe561e29c7f0f6f7?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
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
  const imageCarouselRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projects = [
    { name: "Asansol (PAHARPUR COOLING TOWERS)", images: [...projectImages] },
    { name: "PINNACLE HONDA Showroom (Asansol)", images: [...projectImages1] },
    { name: "PINNACLE HONDA Showroom (Asansol)", images: [...projectImages1] },
    { name: "PINNACLE HONDA Showroom (Asansol)", images: [...projectImages1] },
    { name: "PINNACLE HONDA Showroom (Asansol)", images: [...projectImages1] },
    { name: "PINNACLE HONDA Showroom (Asansol)", images: [...projectImages1] },
    { name: "PINNACLE HONDA Showroom (Asansol)", images: [...projectImages1] },
    { name: "PINNACLE HONDA Showroom (Asansol)", images: [...projectImages1] },
    { name: "PINNACLE HONDA Showroom (Asansol)", images: [...projectImages1] },
    {
      name: "NATIONAL HIGHWAY (NH-2) PANAGARH to BARBADDA STRETCH",
      images: [...projectImages2],
    },
  ];

  return (
    <>
      <div>
        <p>
          Here are a few of the hundreds of projects we’ve completed over the
          past{" "}
          <span style={{ color: "#e53935", fontWeight: "bold" }}>27 years</span>
          . Our project portfolio is growing every day. We are sure to have the
          experience we need to provide you with a quality, on-schedule project.{" "}
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            We are proud to be part of so many exciting projects!
          </span>
        </p>
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
              onClick={onProjectClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ProjectsViewer
        onClose={onProjectImageViewClose}
        images={selectedProject?.images}
        showProjectView={showProjectView}
      />

      <h4 className="project-heading">Our Clients Are</h4>
      <Client />
    </>
  );
};

export default ProjectsPage;