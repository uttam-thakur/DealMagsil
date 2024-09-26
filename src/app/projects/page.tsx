
// 'use client'
// import ImageCarousel from '../components/ProjectCarousel';
// import '.././projects/page.css'
// import Client from '../components/Clients';
// const ProjectsPage = () => {
//   const projectImages = [
//     { src: 'https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?w=400&auto=format&fit=crop&q=60', caption: 'Caption One' },
//     { src: 'https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?w=400&auto=format&fit=crop&q=60', caption: 'Caption One' },
//     { src: 'https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60', caption: 'Caption Two' },
//     { src: 'https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60', caption: 'Caption Two' },
//     { src: 'https://images.unsplash.com/photo-1684262667998-ca8c750cad71?w=1000&auto=format&fit=crop&q=60', caption: 'Caption Three' },
//     // More images...
//   ];

//   return (
//     <div className='mainDiv' >
//       <div>
//         <p>
//           Here are a few of the hundreds of projects we’ve completed over the past{' '}
//           <span style={{ color: 'red' }}>27 years</span>. Our project portfolio is growing every day.
//           We are sure to have the experience we need to provide you with a quality, on-schedule
//           project.<span style={{ font: '45px' }}> We are proud to be part of so many exciting projects!</span>
//         </p>
//       </div>
//       <h4>​PAVER BLOCKS , GRASS PAVERS SUPPLYING & EXECUTION AT GENEXX EXOTICA -Asansol  (PAHARPUR COOLING TOWERS)

//       </h4>
//       <ImageCarousel images={projectImages} />
//       <h4>PAVER BLOCKS EXECUTION AT PINNACLE HONDA Showroom (Asansol)

//       </h4>

//       <ImageCarousel images={projectImages} />
//       <h4> SUPPLYING OF FENCING PILLARS OVER NATIONAL HIGHWAY (NH-2) PANAGARH to BARBADDA STRETCH

//       </h4>

//       <ImageCarousel images={projectImages} />
//       <h4>Our Clients Are</h4>
//       <Client />
//     </div>
//   );
// };

// export default ProjectsPage;



'use client'
import ImageCarousel from '../components/ProjectCarousel';
import '.././projects/page.css'
import Client from '../components/Clients';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProjectsPage = () => {
  const projectImages = [
    { src: 'https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?w=400&auto=format&fit=crop&q=60', caption: 'Caption One' },
    { src: 'https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?w=400&auto=format&fit=crop&q=60', caption: 'Caption One' },
    { src: 'https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60', caption: 'Caption Two' },
    { src: 'https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60', caption: 'Caption Two' },
    { src: 'https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60', caption: 'Caption Two' },
    { src: 'https://images.unsplash.com/photo-1684262667998-ca8c750cad71?w=1000&auto=format&fit=crop&q=60', caption: 'Caption Three' },
  ];

  const imageCarouselRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
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
    <div className='mainDiv'>
    <MainDiv >
      <div>
        <p>
          Here are a few of the hundreds of projects we’ve completed over the past{' '}
          <span style={{ color: 'red' }}>27 years</span>. Our project portfolio is growing every day.
          We are sure to have the experience we need to provide you with a quality, on-schedule
          project.<span style={{ fontSize: '20px' }}> We are proud to be part of so many exciting projects!</span>
        </p>
      </div>
      <h4>​PAVER BLOCKS , GRASS PAVERS SUPPLYING & EXECUTION AT GENEXX EXOTICA -Asansol (PAHARPUR COOLING TOWERS)</h4>

      <CarouselWrapper ref={(el:any) => (imageCarouselRefs.current[0] = el)}>
        <ImageCarousel images={projectImages} />
      </CarouselWrapper>

      <h4>PAVER BLOCKS EXECUTION AT PINNACLE HONDA Showroom (Asansol)</h4>
      <CarouselWrapper ref={(el:any) => (imageCarouselRefs.current[1] = el)}>
        <ImageCarousel images={projectImages} />
      </CarouselWrapper>

      <h4>SUPPLYING OF FENCING PILLARS OVER NATIONAL HIGHWAY (NH-2) PANAGARH to BARBADDA STRETCH</h4>
      <CarouselWrapper ref={(el:any) => (imageCarouselRefs.current[2] = el)}>
        <ImageCarousel images={projectImages} />
      </CarouselWrapper>

      <h4>Our Clients Are</h4>
      <Client />
    </MainDiv>
    </div>
  );
};

export default ProjectsPage;

// Styled Components

const MainDiv = styled.div`
  padding: 20px;
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
