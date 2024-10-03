// import React from "react";
// import styles from "../Client.module.css";

// const Client: React.FC = () => {
//   return (
//     <div className={styles.slider}>
//       <div className={styles.slideTrack}>
//         {Array.from({ length: 7 }, (_, index) => (
//           <div className={styles.slide} key={index}>
//             <img
//               src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${
//                 index + 1
//               }.png`}
//               height="100"
//               width="250"
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//         {/* Duplicate slides for infinite scrolling effect */}
//         {Array.from({ length: 7 }, (_, index) => (
//           <div className={styles.slide} key={index + 7}>
//             <img
//               src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${
//                 index + 1
//               }.png`}
//               height="100"
//               width="250"
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Client;

import React from "react";
import styles from "../Client.module.css";
const Client: React.FC = () => {
  const customImages = [
    "http://nebula.wsimg.com/cf4e5fad76a811ebf26cc2ea0104c3ae?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
    "http://nebula.wsimg.com/c96a3c3d5a933531217e3da6cfc0284d?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
    "http://nebula.wsimg.com/a330e46a25d8a2285e3e7622cca182a7?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
    "http://nebula.wsimg.com/ab454e7a1ab9e28f6774f12ef2f1ba0a?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
    "http://nebula.wsimg.com/e6185c9713638318500d911bf8a125d4?AccessKeyId=EE46D1080F0D18C989B0&disposition=0&alloworigin=1",
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {customImages.map((image, index) => (
          <div className={styles.slide} key={index}>
            <img
              src={image}
              height="100"
              width="250"
              alt={`Slide ${index + 1}`}
              className={`${styles.logo} ${styles.overlay}`}
            />
          </div>
        ))}
        {/* Duplicate slides for infinite scrolling effect */}
        {customImages.map((image, index) => (
          <div className={styles.slide} key={index + customImages.length}>
            <img
              src={image}
              height="100"
              width="250"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
