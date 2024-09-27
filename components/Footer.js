import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        mt: 'auto',
        textAlign: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        height: '150px',
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        {/* Section 1: Logo and Company Name */}
        <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="https://via.placeholder.com/50" alt="Logo" style={{ marginBottom: 8 }} />
          <Typography variant="h6">My App</Typography>
        </Grid>

        {/* Section 2: Useful Links */}
        <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="subtitle1" gutterBottom>Useful Links</Typography>
          <Link href="#" color="inherit" underline="none">Home</Link>
          <Link href="#" color="inherit" underline="none">About Us</Link>
          <Link href="#" color="inherit" underline="none">Services</Link>
          <Link href="#" color="inherit" underline="none">Contact</Link>
        </Grid>

        {/* Section 3: Contact Information */}
        <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="subtitle1" gutterBottom>Contact Us</Typography>
          <Typography variant="body2">1234 Street Name</Typography>
          <Typography variant="body2">City, State, 56789</Typography>
          <Typography variant="body2">Email: info@myapp.com</Typography>
          <Typography variant="body2">Phone: (123) 456-7890</Typography>
        </Grid>

        {/* Section 4: Placeholder Text */}
        <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="subtitle1" gutterBottom>About Us</Typography>
          <Typography variant="body2">
            Placeholder text here. This is a short description or information that can be replaced.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
