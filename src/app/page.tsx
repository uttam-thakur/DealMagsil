import WelcomeCard from "./components/CardItem";
import Carousel from "./components/Carousel";
import Carouselinfra from "./components/Carouselinfra";
import RegistrationSection from "./components/RegistrationSection";
import "slick-carousel/slick/slick.css";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Cement Products Manufacturing | Slabs, Tiles, Fencing, Pipes
        </title>
        <meta
          name="description"
          content="Deal Magsil specializes in high-quality cement products including precast slabs, fencing pillars, roofing tiles, RCC pipes, and more for industrial and commercial use."
        />
        <meta
          name="keywords"
          content="cement products, precast concrete, roofing tiles, fencing pillars, RCC pipes, cement slabs, concrete blocks, precast construction materials, precast housing solutions, high-quality concrete"
        />
        <meta name="author" content="Deal Magsil" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <div style={{ overflowX: "hidden" }}>
        <Carousel />
        <br />
        <WelcomeCard />
        <br />
        <Carouselinfra />
        <RegistrationSection />
      </div>
    </>
  );
};

export default Home;
