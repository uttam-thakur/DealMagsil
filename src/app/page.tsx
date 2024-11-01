import WelcomeCard from "./components/CardItem";
import Carousel from "./components/Carousel";
import Carouselinfra from "./components/Carouselinfra";
import RegistrationSection from "./components/RegistrationSection";
import "slick-carousel/slick/slick.css";
import FeedbackSlider from "./components/FeedbackSlider";
import SocialIcons from "./components/SocialIcons";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Carousel />
      <WelcomeCard />
      <Carouselinfra />
      <FeedbackSlider />
      <RegistrationSection />
      <SocialIcons />
    </div>
  );
};

export default Home;
