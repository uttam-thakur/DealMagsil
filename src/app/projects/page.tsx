"use client";
import ImageCarousel from "../components/ProjectCarousel";
import ".././projects/page.css";
import Client from "../components/Clients";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const ProjectsPage = () => {
  const projectImages = [
    {
      src: "https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?w=400&auto=format&fit=crop&q=60",
      caption: "Caption One",
    },
    {
      src: "https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?w=400&auto=format&fit=crop&q=60",
      caption: "Caption One",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60",
      caption: "Caption Two",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60",
      caption: "Caption Two",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60",
      caption: "Caption Two",
    },
    {
      src: "https://images.unsplash.com/photo-1684262667998-ca8c750cad71?w=1000&auto=format&fit=crop&q=60",
      caption: "Caption Three",
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
        <ImageCarousel images={projectImages} />
      </CarouselWrapper>

      <div className="section-separator"></div>

      <h4 className="project-heading">
        SUPPLYING OF FENCING PILLARS OVER NATIONAL HIGHWAY (NH-2) PANAGARH to
        BARBADDA STRETCH
      </h4>
      <CarouselWrapper ref={(el: any) => (imageCarouselRefs.current[2] = el)}>
        <ImageCarousel images={projectImages} />
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
