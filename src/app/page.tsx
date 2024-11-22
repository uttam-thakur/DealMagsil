// import WelcomeCard from "./components/CardItem";
// import Carousel from "./components/Carousel";
// import Carouselinfra from "./components/Carouselinfra";
// import RegistrationSection from "./components/RegistrationSection";
// import "slick-carousel/slick/slick.css";
// import FeedbackSlider from "./components/FeedbackSlider";
// import styles from "./components/styles/Home.module.css";
// const Home = () => {
//   return (
//     <div style={{ overflowX: "hidden" }}>
//       <div className={styles.carousel}>
//         <Carousel />
//       </div>
//       <div className={styles.welcomeCard}>
//         <WelcomeCard />
//       </div>{" "}
//       <Carouselinfra />
//       <FeedbackSlider />
//       <RegistrationSection />
//     </div>
//   );
// };

// export default Home;

import WelcomeCard from "./components/CardItem";
import Carousel from "./components/Carousel";
import Carouselinfra from "./components/Carouselinfra";
import RegistrationSection from "./components/RegistrationSection";
import "slick-carousel/slick/slick.css";
import FeedbackSlider from "./components/FeedbackSlider";
import styles from "./components/styles/Home.module.css";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* <div className={styles.carousel}> */}
      <Carousel />
      {/* </div> */}

      <WelcomeCard />
      <Carouselinfra />

      <FeedbackSlider />

      <RegistrationSection />
      {/* <div className="lastDiv"></div> */}
    </div>
  );
};

export default Home;
