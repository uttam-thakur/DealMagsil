import * as React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const RegistrationSection = () => {
  const registrations = [
    'Government of West Bengal registered S.S.I Unit.',
    'An ISO 9001 : 2008 CERTIFIED & Registered Company.',
    'Registered Technical support member from Council of Architecture, India.',
    'Registered Trade Licence Holder from Asansol Municipal Corporation.',
    'Registered Company of Directorate of Commercial Taxes Government of West Bengal.',
    'Vendor Registration of many elite Government & Private Companies.'
  ];

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
        Our Registrations and Certifications
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {registrations.map((item, index) => (
          <Grid item xs={12 } sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', alignItems: 'center',height:'100%','&:hover':{transform: 'scale(1.08)',transition: 'all 0.5s ease',} }}>
              <CheckCircle sx={{ color: 'green', mr: 2 }} />
              <Typography variant="body1">{item}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RegistrationSection;
