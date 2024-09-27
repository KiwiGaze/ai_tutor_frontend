import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Modal,
  Paper,
  Divider,
} from '@mui/material';

const galleryItems = [
  {
    image: 'https://via.placeholder.com/300',
    title: 'Course 1',
    description: 'Brief description of Course 1.',
    detailedText: 'This is more detailed information about Course 1.',
    price: '$99',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Course 2',
    description: 'Brief description of Course 2.',
    detailedText: 'This is more detailed information about Course 2.',
    price: '$199',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Course 3',
    description: 'Brief description of Course 3.',
    detailedText: 'This is more detailed information about Course 3.',
    price: '$299',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Course 4',
    description: 'Brief description of Course 4.',
    detailedText: 'This is more detailed information about Course 4.',
    price: '$299',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Course 5',
    description: 'Brief description of Course 5.',
    detailedText: 'This is more detailed information about Course 5.',
    price: '$299',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Course 6',
    description: 'Brief description of Course 6.',
    detailedText: 'This is more detailed information about Course 6.',
    price: '$299',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Course 7',
    description: 'Brief description of Course 7.',
    detailedText: 'This is more detailed information about Course 7.',
    price: '$299',
  },
  
];

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {galleryItems.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: 'auto', marginBottom: 8 }}
              />
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {item.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpen(item)}
              >
                Learn More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Modal for expanded view */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Paper elevation={6} sx={{ p: 4, width: '80%', maxWidth: 800 }}>
          {selectedItem && (
            <Box display="flex" alignItems="center">
              <Box sx={{ width: '50%', pr: 2 }}>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
              <Box sx={{ width: '50%' }}>
                <Typography
                  id="modal-title"
                  variant="h5"
                  gutterBottom
                  align="left"
                >
                  {selectedItem.title}
                </Typography>
                <Typography
                  id="modal-description"
                  variant="body1"
                  paragraph
                  align="left"
                >
                  {selectedItem.detailedText}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6">{selectedItem.price}</Typography>
                  <Button variant="contained" color="secondary">
                    Register
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Paper>
      </Modal>
    </Box>
  );
};

export default GalleryPage;
