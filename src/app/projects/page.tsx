"use client";
import ImageCarousel from "../components/ProjectCarousel";
import ".././projects/page.css";
import Client from "../components/Clients";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const ProjectsPage = () => {
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
    {
      src: "http://nebula.wsimg.com/63efeadc42b8d9f889f915dcbea58452?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
      caption: "Caption five",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 } // 20% of the div should be visible before the animation triggers
    );

    imageCarouselRefs.current.forEach((carousel) => {
      if (carousel) {
        observer.observe(carousel);
      }
    });

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);

  return (
    <MainDiv>
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

      <h4 className="project-heading">
        PAVER BLOCKS, GRASS PAVERS SUPPLYING & EXECUTION AT GENEXX EXOTICA -
        Asansol (PAHARPUR COOLING TOWERS)
      </h4>
      <CarouselWrapper ref={(el: any) => (imageCarouselRefs.current[0] = el)}>
        <ImageCarousel images={projectImages} />
      </CarouselWrapper>

      <div className="section-separator"></div>

      <h4 className="project-heading">
        PAVER BLOCKS EXECUTION AT PINNACLE HONDA Showroom (Asansol)
      </h4>
      <CarouselWrapper ref={(el: any) => (imageCarouselRefs.current[1] = el)}>
        <ImageCarousel images={projectImages1} />
      </CarouselWrapper>

      <div className="section-separator"></div>

      <h4 className="project-heading">
        SUPPLYING OF FENCING PILLARS OVER NATIONAL HIGHWAY (NH-2) PANAGARH to
        BARBADDA STRETCH
      </h4>
      <CarouselWrapper ref={(el: any) => (imageCarouselRefs.current[2] = el)}>
        <ImageCarousel images={projectImages2} />
      </CarouselWrapper>

      <div className="section-separator"></div>

      <h4 className="project-heading">Our Clients Are</h4>
      <Client />
    </MainDiv>
  );
};

export default ProjectsPage;

// Styled Components
const MainDiv = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;

  .visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CarouselWrapper = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 1s ease;
  margin-bottom: 50px;
`;
