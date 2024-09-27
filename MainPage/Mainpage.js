import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';

// Styled button for registration
const RegisterButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'yellow',
  color: 'black',
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'orange',
  },
}));

const MainPage = () => {
  // Settings for the image slideshow
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container maxWidth="lg">
      {/* Section 1: Image Slideshow with Registration Button */}
      <Box sx={{ position: 'relative', marginBottom: 4 }}>
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/1200x400" alt="Slide 1" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="https://via.placeholder.com/1200x400" alt="Slide 2" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="https://via.placeholder.com/1200x400" alt="Slide 3" style={{ width: '100%' }} />
          </div>
        </Slider>
        <RegisterButton variant="contained">Register</RegisterButton>
      </Box>

      {/* Section 2: Vertical Images with Placeholder Text */}
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginBottom: 4 }}>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <img src="https://via.placeholder.com/300x300" alt="Image 1" style={{ width: '100%' }} />
          <Typography variant="body1">Placeholder Text 1</Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <img src="https://via.placeholder.com/300x300" alt="Image 2" style={{ width: '100%' }} />
          <Typography variant="body1">Placeholder Text 2</Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <img src="https://via.placeholder.com/300x300" alt="Image 3" style={{ width: '100%' }} />
          <Typography variant="body1">Placeholder Text 3</Typography>
        </Box>
      </Box>

      {/* Section 3: Blank Section */}
      <Box sx={{ height: 400, border: '1px solid gray' }}>
        {/* Blank Section */}
      </Box>
    </Container>
  );
};

export default MainPage;
