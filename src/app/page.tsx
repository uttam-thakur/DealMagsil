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
      <div className={styles.carousel}>
        <Carousel />
      </div>

      {/* <div
        className={styles.welcomeSection}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 0",
        }}
      >
      </div> */}
      <WelcomeCard />

      {/* <div
        className={styles.infraSection}
        style={{
          backgroundImage: "url('/images/infra-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 20px",
        }}
      >
      </div> */}
      <Carouselinfra />

      {/* <div
        className={styles.feedbackSection}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 20px",
          opacity: "0.8",
        }}
      >
      </div> */}
      <FeedbackSlider />

      {/* <div
        className={styles.registrationSection}
        style={{
          backgroundImage: "url('/images/registration-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 20px",
        }}
      >
      </div> */}
      <RegistrationSection />
    </div>
  );
};

export default Home;
