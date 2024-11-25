import * as React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import style from "./styles/RegistrationSection.module.css";
const RegistrationSection = () => {
  const registrations = [
    "Government of West Bengal registered S.S.I Unit.",
    "An ISO 9001 : 2008 CERTIFIED & Registered Company.",
    "Registered Technical support member from Council of Architecture, India.",
    "Registered Trade Licence Holder from Asansol Municipal Corporation.",
    "Registered Company of Directorate of Commercial Taxes Government of West Bengal.",
    "Vendor Registration of many elite Government & Private Companies.",
  ];

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "black",
        borderTop: "1px solid rgb(212,168,99)",
        borderBottom: "2px solid rgb(212,168,99)",
        "@media (max-width: 400px)": {
          borderBottom: "10px solid rgb(212,168,99)",
        },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          mb: 3,
          lineHeight: { xs: "1.8rem", sm: "1.5rem" },
          fontWeight: 600,
          fontSize: { xs: "1.5rem", sm: "2rem" },
          marginBottom: { xs: 2, sm: 3 },
          color: "white",
        }}
      >
        Our Registrations and Certifications
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={style.card}
      >
        {registrations.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              className={style.section}
              elevation={3}
              sx={{
                padding: 2,
                display: "flex",
                alignItems: "center",
                background: "transparent",
                border: "1px solid white",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <CheckCircle sx={{ color: "green", mr: 2 }} />
              <Typography variant="body1" color="rgb(212,168,99)">
                {item}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RegistrationSection;
