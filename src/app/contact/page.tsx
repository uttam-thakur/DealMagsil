"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Modal,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbsUpIcon from "@mui/icons-material/ThumbUp";
import ThumbsDownIcon from "@mui/icons-material/ThumbDown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    phone: "", // Added phone field for modal
    query: "", // Added query field for modal
  });

  const validateModalInputs = () => {
    const { name, email, phone, query } = formValues;

    // Validation for name
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (name.length <= 3 || !nameRegex.test(name)) {
      toast.error("Please fill all mandatory * fields!");
      return false;
    }

    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }

    // Validation for phone
    if (phone.trim() === "") {
      toast.error("Phone number field cannot be empty!");
      return false;
    }
    toast.success("Your Query Sent Successfully!");

    // Validation for query
    if (query.trim() === "") {
      toast.error("Query field cannot be empty!");
      return false;
    }

    return true; // All validations passed
  };

  const [openModal, setOpenModal] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false); // State to track which accordion is expanded

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message, phone, query } = formValues;

    // Validation for name
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (name.length <= 3 || !nameRegex.test(name)) {
      toast.error(
        "Name must be more than 3 characters and contain only letters!"
      );
      return;
    }

    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Validation for message
    if (message.trim() === "") {
      toast.error("Message field cannot be empty!");
      return;
    }

    // Validation for phone in modal
    if (openModal && phone.trim() === "") {
      toast.error("Phone number field cannot be empty!");
      return;
    }

    // Validation for query in modal
    if (openModal && query.trim() === "") {
      toast.error("Query field cannot be empty!");
      return;
    }

    // If all validations pass, show success message
    toast.success("Form submitted successfully!");
  };

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Function to handle thumbs-up click
  const handleThumbsUp = () => {
    toast.success("Thank you for choosing us!");
  };

  // Function to handle thumbs-down click
  const handleThumbsDown = () => {
    setOpenModal(true); // Open the modal
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setOpenModal(false);
    // Reset form values for the modal
    setFormValues({ name: "", email: "", message: "", phone: "", query: "" });
  };

  // Function to handle accordion expansion
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      {/* ToastContainer to display the toast notifications */}
      <ToastContainer />
      <Container maxWidth="md" style={{ marginTop: "30px" }}>
        {/* Header Section */}
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Contact our friendly team
          </Typography>
          <Typography variant="body1">Let us know how we can help.</Typography>
        </Box>

        {/* Contact Options */}
        <Grid container spacing={3}>
          {/* Ensure all cards are the same size */}
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Chat to sales</Typography>
              <Typography variant="body2">
                Speak to our friendly team.
              </Typography>
              <Typography variant="body2" color="primary">
                sales@untitledui.com
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Chat to support</Typography>
              <Typography variant="body2">We're here to help.</Typography>
              <Typography variant="body2" color="primary">
                support@untitledui.com
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Visit us</Typography>
              <Typography variant="body2">Visit our office HQ.</Typography>
              <Button>View on Google Maps</Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Call us</Typography>
              <Typography variant="body2">Mon-Fri from 8am to 5pm.</Typography>
              <Typography variant="body2" color="primary">
                +1(555) 000-0000
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* FAQ Section */}
        <Box mt={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
            Frequently asked questions
          </Typography>

          {/* Use Accordion for FAQ with Expand More Arrow */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">
                Is there a free trial available?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2">
                Yes, you can try us for free for 30 days. We'll also provide a
                free 30-minute onboarding call to get you set up.
              </Typography>
              {/* Thumbs Up/Down Icons and Text Positioned at Bottom Left */}
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="body2"
                  sx={{ color: "blue", marginRight: "-50px" }}
                >
                  Is this helpful?
                </Typography>
                <Box>
                  <IconButton onClick={handleThumbsUp} color="primary">
                    <ThumbsUpIcon />
                  </IconButton>
                  <IconButton onClick={handleThumbsDown} color="secondary">
                    <ThumbsDownIcon />
                  </IconButton>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">
                Can I change my plan later?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2">
                Yes, you can change your plan anytime.
              </Typography>
              {/* Thumbs Up/Down Icons and Text Positioned at Bottom Left */}
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" sx={{ color: "blue" }}>
                  Is this helpful?
                </Typography>
                <Box>
                  <IconButton onClick={handleThumbsUp} color="primary">
                    <ThumbsUpIcon />
                  </IconButton>
                  <IconButton onClick={handleThumbsDown} color="secondary">
                    <ThumbsDownIcon />
                  </IconButton>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Add more FAQs here using Accordion */}
        </Box>

        {/* Footer Section */}
        <Box textAlign="center" mt={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Ready to level up your dream project?
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Contact us today and let us know how we can help.
          </Typography>
        </Box>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          mt={6}
          sx={{ backgroundColor: "#f8f8f8", padding: 3, borderRadius: 2 }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Send us a message
          </Typography>

          {/* Name Field */}
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 3 }}
            value={formValues.name}
            onChange={handleInputChange}
          />

          {/* Email Field */}
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 3 }}
            value={formValues.email}
            onChange={handleInputChange}
          />

          {/* Message Field */}
          <TextField
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={5}
            sx={{ mb: 3 }}
            value={formValues.message}
            onChange={handleInputChange}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#ff6347",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              padding: "15px",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#e5533d" },
            }}
          >
            Send Message
          </Button>
        </Box>

        {/* Modal for Feedback */}
        <Modal
          open={openModal}
          onClose={handleModalClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          BackdropProps={{
            style: {
              backdropFilter: "blur(10px)", // Adjust blur intensity as needed
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: adds a semi-transparent dark overlay
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              How Can We Help You?
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Please let us know how we can improve. You can also give us your
              contact details.
            </Typography>

            {/* Name Field for Modal */}
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              required
              fullWidth
              sx={{ mb: 2 }}
              value={formValues.name}
              onChange={handleInputChange}
            />

            {/* Email Field for Modal */}
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              required
              fullWidth
              sx={{ mb: 2 }}
              value={formValues.email}
              onChange={handleInputChange}
            />

            {/* Query Field for Modal */}
            <TextField
              id="query"
              name="query"
              label="Query"
              variant="outlined"
              required
              fullWidth
              sx={{ mb: 2 }}
              value={formValues.query}
              onChange={handleInputChange}
            />

            {/* Phone Number Field for Modal */}
            <TextField
              id="phone"
              name="phone"
              label="Phone Number"
              variant="outlined"
              required
              fullWidth
              sx={{ mb: 2 }}
              value={formValues.phone}
              onChange={handleInputChange}
            />
            <Button
              onClick={() => {
                if (validateModalInputs()) {
                  handleModalClose(); // Close the modal only if validation passes
                }
              }}
              variant="contained"
              sx={{
                backgroundColor: "#ff6347",
                color: "white",
                "&:hover": { backgroundColor: "#e5533d" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </Container>
    </>
  );
}
