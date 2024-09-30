import WelcomeCard from "./components/CardItem";
import Carousel from "./components/Carousel";
import Carouselinfra from "./components/Carouselinfra";
import RegistrationSection from "./components/RegistrationSection";
import "slick-carousel/slick/slick.css";
import SEO from "./components/SEO";

const Home = () => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <Carousel />
        {/* <br /> */}
        <WelcomeCard />
        {/* <br /> */}
        <Carouselinfra />
        <RegistrationSection />
      </div>
    </>
  );
};

export default Home;
