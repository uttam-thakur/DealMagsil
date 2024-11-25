import Hero from "./components/Hero";
import WelcomeCard from "./components/CardItem";
import Carouselinfra from "./components/Carouselinfra";
import FeedbackSlider from "./components/FeedbackSlider";
import RegistrationSection from "./components/RegistrationSection";

import "slick-carousel/slick/slick.css";
import WhyUs from "./components/WhyUs";
import Carousel from "./components/Carousel";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Hero />
      <WelcomeCard />

      <Carouselinfra />

      <FeedbackSlider />

      <RegistrationSection />

      {/* <WhyUs /> */}
    </div>
  );
};

export default Home;
