// "use client";

// import { FaMapMarkerAlt } from "react-icons/fa";
// import { useScrolling } from "../../common/hooks/useScrolling";

// const FABLocation = () => {
//   const scrolling = useScrolling({ fallbackTime: 750 });

//   const handleLocationClick = () => {
//     const latitude = 23.683397441821548;
//     const longitude = 86.94451542052082;

//     const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

//     window.open(googleMapsUrl, "_blank");
//   };

//   return (
//     <button
//       onClick={handleLocationClick}
//       style={{
//         opacity: !scrolling ? 1 : 0,
//         transition: "opacity 0.85s ease, transform 2s ease",
//         transform: !scrolling ? "translateX(0)" : "translateX(200px)",
//       }}
//       className="flex justify-center items-center p-4 fixed top-[calc(100svh_-_250px)] right-6 bg-[#363535] z-[2] rounded-full cursor-pointer shadow-[0px_6px_18px_0px_rgba(21,29,49,0.24)]"
//     >
//       <FaMapMarkerAlt className="text-3xl text-white" />
//     </button>
//   );
// };

// export default FABLocation;


"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { useScrolling } from "../../common/hooks/useScrolling";
import './style.css'; // Import your CSS file

const FABLocation = () => {
  const scrolling = useScrolling({ fallbackTime: 750 });

  const handleLocationClick = () => {
    const latitude = 23.683397441821548;
    const longitude = 86.94451542052082;

    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(googleMapsUrl, "_blank");
  };

  return (
    <button
      onClick={handleLocationClick}
      className={`fab-location ${!scrolling ? 'visible' : 'hidden'}`}
    >
      <FaMapMarkerAlt className="fab-location-icon" />
    </button>
  );
};

export default FABLocation;
