"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbsUpIcon from "@mui/icons-material/ThumbUp";
import ThumbsDownIcon from "@mui/icons-material/ThumbDown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactModal from "../components/ContactModal";
import GetInTouchForm from "../components/GetInTouchForm";
import styles from "./contact.module.css";
export default function Contact() {
  const [openModal, setOpenModal] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleThumbsDown = () => setOpenModal(true);
  const handleThumbsUp = () => toast.success("Thank you for choosing us!");

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days...",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan anytime.",
    },
  ];

  return (
    <>
      <div className={styles.main}>
        <p className={styles.para}>
          <span style={{ fontSize: "34px", maxWidth: 500 }}>
            {" "}
            Get in Touch with Us
          </span>
          {<br />}
          We’d love to hear from you! Whether you have a question, need
          assistance, or want to discuss a project, our team is here to help.
          Reach out to us through any of the options below, and we’ll get back
          to you as soon as possible. Contact Us Today!
        </p>
      </div>
      <div>
        <ToastContainer />
        <Container maxWidth="md" sx={{ marginTop: 5 }}>
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Contact our friendly team
            </Typography>
            <Typography variant="body1">
              Let us know how we can help.
            </Typography>
          </Box>{" "}
          <Grid container spacing={3}>
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
                  abhradey11@gmail.com
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
                  abhra@dealmagsil.com
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
                <Typography variant="body2">
                  Mon-Fri from 8am to 5pm.
                </Typography>
                <Typography variant="body2" color="primary">
                  +91 9332331442
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box mt={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Frequently asked questions
            </Typography>
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={() => setExpanded(expanded ? false : `panel${index}`)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" style={{ display: "flex" }}>
                    {faq.answer}
                  </Typography>
                  <Box
                    mt={2}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body2" sx={{ color: "blue" }}>
                      is this information helpful?
                    </Typography>
                    <Box>
                      <IconButton onClick={handleThumbsUp}>
                        <ThumbsUpIcon color="success" />
                      </IconButton>
                      <IconButton onClick={handleThumbsDown}>
                        <ThumbsDownIcon color="error" />
                      </IconButton>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          <Box mt={8}>
            <Paper elevation={3}>
              <GetInTouchForm />
            </Paper>
          </Box>
        </Container>
        <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </>
  );
}
