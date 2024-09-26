
import WelcomeCard from "./components/CardItem";
import Carousel from "./components/Carousel";
import Carouselinfra from "./components/Carouselinfra";
import FABLocation from "./components/fabComponents/FABLocation";
import FABWhatsApp from "./components/fabComponents/FABWhatsApp";
import RegistrationSection from "./components/RegistrationSection";
import 'slick-carousel/slick/slick.css';


const Home = () => {
  return (
    <div>
      <Carousel/>
      <WelcomeCard/>
      <br/>
      <Carouselinfra/>
      <RegistrationSection/>

      {/* Fab  */}
      {/* <FABLocation/>
      <FABWhatsApp/> */}
      
    </div>
  );
};

export default Home;
