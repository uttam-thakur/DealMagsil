// it good working

// "use client";
// import React, { useState, useRef } from "react";
// import { Box, TextField, Typography, Button, Grid } from "@mui/material";
// import { toast } from "react-toastify";
// import { sendEmail } from "../services/services";

// export default function GetInTouchForm() {
//   const formRef = useRef(null);

//   const [formValues, setFormValues] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const validateFormInputs = () => {
//     const { name, email, message } = formValues;
//     const nameRegex = /^[a-zA-Z\s]+$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (name.length <= 3 || !nameRegex.test(name)) {
//       toast.error(
//         "Name must be more than 3 characters and contain only letters!"
//       );
//       return false;
//     }
//     if (!emailRegex.test(email)) {
//       toast.error("Please enter a valid email address!");
//       return false;
//     }
//     if (message.trim() === "") {
//       toast.error("Message field cannot be empty!");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     if (!validateFormInputs()) return;

//     try {
//       await sendEmail(formRef.current);
//       setFormValues({ name: "", email: "", message: "" });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleInputChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormValues((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         backgroundImage: "url('/images/contact2.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         marginLeft: { xs: "-15px", md: "-540px" }, // No margin on smaller screens
//       }}
//     >
//       <Grid
//         container
//         sx={{
//           width: "100%",
//           maxWidth: "1200px",
//           marginX: "auto",
//           padding: 3,
//           alignItems: "center",
//         }}
//       >
//         {/* Left Section */}
//         <Grid item xs={12} md={6}>
//           <Typography
//             variant="h3"
//             sx={{
//               color: "rgb(178, 131, 78)",
//               fontWeight: "bold",
//               mb: 2,
//               textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
//               fontSize: { xs: "36px" },
//             }}
//           >
//             Get In Touch With Us
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               color: "white",
//               opacity: 0.8,
//               textShadow: "1px 1px 8px rgba(0, 0, 0, 0.7)",
//               lineHeight: 1.6,
//               border: { xs: "1px solid rgb(178, 131, 78)  " },
//               borderRadius: "8px",
//               padding: { xs: "1rem" },
//               fontSize: { md: "30px" },
//               lineHeightStep: { md: "1rem" },
//               fontFamily: "open saans",
//             }}
//           >
//             We would love to hear from you. Whether you have a question, a
//             concern, or just want to start a project, drop us a message. Our
//             team is always here to help you out!
//           </Typography>
//         </Grid>

//         {/* Right Section: Form */}
//         <Grid item xs={12} md={6}>
//           <Box
//             component="form"
//             ref={formRef}
//             onSubmit={handleSubmit}
//             sx={{
//               backdropFilter: "blur(10px)",
//               // backgroundColor: "rgba(255, 255, 255, 0.2)",
//               backgroundColor: "rgba(0, 0, 0, 0.2)",
//               padding: 4,
//               borderRadius: 2,
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
//               color: "white",
//               marginLeft: { xs: "0px", md: "200px" },
//               marginTop: { xs: "20px" },
//               height: "600px",
//               width: "100%",
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: "bold",
//                 mb: 3,
//                 color: "rgb(212, 168, 99)",
//               }}
//             >
//               Contact Us
//             </Typography>
//             <TextField
//               name="name"
//               label="Name"
//               variant="outlined"
//               fullWidth
//               required
//               sx={{
//                 mb: 3,
//                 input: { color: "whitesmoke" },
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "white" },
//                   // "&:hover fieldset": { borderColor: "#ff6347" },
//                   "&.Mui-focused fieldset": { borderColor: "white" },
//                 },
//                 "& .MuiInputLabel-root": { color: "white" },
//               }}
//               value={formValues.name}
//               onChange={handleInputChange}
//             />
//             <TextField
//               name="email"
//               label="Email"
//               type="email"
//               variant="outlined"
//               fullWidth
//               required
//               sx={{
//                 mb: 3,
//                 input: { color: "whitesmoke" },
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "white" },
//                   // "&:hover fieldset": { borderColor: "#ff6347" },
//                   "&.Mui-focused fieldset": { borderColor: "white" },
//                 },
//                 "& .MuiInputLabel-root": { color: "white" },
//               }}
//               value={formValues.email}
//               onChange={handleInputChange}
//             />
//             <TextField
//               name="message"
//               label="Message"
//               variant="outlined"
//               fullWidth
//               required
//               multiline
//               rows={5}
//               sx={{
//                 mb: 3,
//                 input: { color: "whitesmoke" },
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "white" },
//                   // "&:hover fieldset": { borderColor: "#ff6347" },
//                   "&.Mui-focused fieldset": { borderColor: "white" },
//                 },
//                 "& .MuiInputLabel-root": { color: "white" },
//               }}
//               value={formValues.message}
//               onChange={handleInputChange}
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{
//                 backgroundColor: "rgb(212, 168, 99)",
//                 color: "white",
//                 "&:hover": { backgroundColor: "rgb(182, 168, 99)" },
//               }}
//             >
//               Send Message
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// it good working

"use client";
import React, { useState, useRef } from "react";
import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import { toast } from "react-toastify";
import { sendEmail } from "../services/services";

export default function GetInTouchForm() {
  const formRef = useRef(null);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateFormInputs = () => {
    const { name, email, message } = formValues;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length <= 3 || !nameRegex.test(name)) {
      toast.error(
        "Name must be more than 3 characters and contain only letters!"
      );
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    if (message.trim() === "") {
      toast.error("Message field cannot be empty!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateFormInputs()) return;

    try {
      await sendEmail(formRef.current);
      setFormValues({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/images/contact2.jpg')",
        backgroundSize: "cover", // Ensure the background image covers the container
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
        marginLeft: { xs: "0px", sm: "0px", md: "-390px" }, // Adjust margin for specific screen sizes
        "@media (max-width: 1024px)": {
          marginLeft: "-120px", // Remove negative margin for tablet view
          height: "100vh", // Ensure it covers the entire viewport height
          backgroundSize: "cover", // Maintain aspect ratio and coverage
        },
        "@media (max-width: 760px)": {
          marginLeft: "-15px", // Remove negative margin for tablet view
        },
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          maxWidth: "1200px",
          marginX: "auto",
          padding: 3,
          alignItems: "center",
        }}
      >
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            "@media (max-width: 1024px)": {
              marginTop: "10px", // Adjust top margin for tablet screens
              textAlign: "left",
              marginLeft: "22.5%",
            },
            "@media (max-width: 760px)": {
              marginTop: "-40px",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "rgb(178, 131, 78)",
              fontWeight: "bold",
              mb: 2,
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
              fontSize: { xs: "36px" },
              "@media (max-width: 1024px)": {
                fontSize: "30px",
              },
              "@media (max-width: 760px)": {
                fontSize: "28px",
                marginLeft: "-40px",
              },
            }}
          >
            Get In Touch With Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              opacity: 0.8,
              textShadow: "1px 1px 8px rgba(0, 0, 0, 0.7)",
              lineHeight: 1.6,
              border: { xs: "1px solid rgb(178, 131, 78)" },
              borderRadius: "8px",
              padding: { xs: "1rem", md: "18px" },
              fontSize: { md: "30px" },
              lineHeightStep: { md: "1rem" },
              fontFamily: "Open Sans",
              "@media (max-width: 1024px)": {
                fontSize: "18px",
                padding: "1.3rem",
              },
              "@media (max-width: 760px)": {
                fontSize: "15px",
                marginLeft: "-42px",
                border: "none",
                marginTop: "-10px",
                width: "100%",
                paddingBottom: "60px",
                color: "whiteSmoke",
              },
            }}
          >
            We would love to hear from you. Whether you have a question, a
            concern, or just want to start a project, drop us a message. Our
            team is always here to help you out!
          </Typography>
        </Grid>

        {/* Right Section: Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              padding: 4,
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              color: "white",
              marginLeft: { xs: "0px", md: "200px" },
              marginTop: { xs: "20px" },
              height: "600px",
              width: "100%", // Added width constraints for responsiveness

              "@media (max-width: 760px)": {
                // marginLeft: "-10px",
                // width: "100%",
                marginTop: "-40px",
                width: "auto",
                // marginLeft: "25px",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "rgb(212, 168, 99)",
              }}
            >
              Contact Us
            </Typography>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              required
              sx={{
                mb: 3,
                input: { color: "whitesmoke" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": { color: "white" },
              }}
              value={formValues.name}
              onChange={handleInputChange}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              sx={{
                mb: 3,
                input: { color: "whitesmoke" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": { color: "white" },
              }}
              value={formValues.email}
              onChange={handleInputChange}
            />
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={5}
              sx={{
                mb: 3,
                input: { color: "whitesmoke" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root": { color: "white" },
              }}
              value={formValues.message}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "rgb(212, 168, 99)",
                color: "white",
                "&:hover": { backgroundColor: "rgb(182, 168, 99)" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
