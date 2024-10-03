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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import "./page.css";

export default function Contact() {
  return (
    <>
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
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">
                Is there a free trial available?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Yes, you can try us for free for 30 days. We'll also provide a
                free 30-minute onboarding call to get you set up.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">
                Can I change my plan later?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Yes, you can change your plan anytime.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Add more FAQs here using Accordion */}
        </Box>

        {/* Footer Section */}
        <Box textAlign="center" mt={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Ready to level up your dream project?
          </Typography>
          <Typography variant="body1" mb={3}>
            {/* Start your 30-day free trial. Cancel anytime. */}
          </Typography>
          {/* <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2, borderRadius: "20px" }} // Rounded button
          >
            View Demo
          </Button>
          <Button variant="outlined" sx={{ borderRadius: "20px" }}>
            Get Started
          </Button> */}
        </Box>
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{ color: "#ff6347" }}
        >
          Get In Touch
        </Typography>

        {/* Form */}
        <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
          {/* Name Field */}
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 3 }}
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
      </Container>
    </>
  );
}
