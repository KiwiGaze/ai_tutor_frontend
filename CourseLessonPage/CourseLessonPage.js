import React from 'react';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import ReactPlayer from 'react-player';
import Sidebar from '../../components/Sidebar';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const CourseLessonPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 4, display: 'flex' }}>
        {/* Video Pane */}
        <Box sx={{ width: '960px', height: '640px', maxWidth: '960px', maxHeight: '640px' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=wPfC7oAXOE4&pp=ygUfb2x5bXBpY3MgaG9uZyBrb25nIGZlbmNpbmcgZ29sZA%3D%3D"
            width="100%"
            height="100%"
            controls
          />
        </Box>

        {/* Right Pane */}
        <Box sx={{ flexGrow: 1, ml: 4, width: '40%' }}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6">Chapter 1</Typography>
              <IconButton>
                <ArrowForwardIcon />
              </IconButton>
            </Box>
            <Typography variant="body1">
              Placeholder text for Chapter 1. This is where the content of the chapter will be displayed.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseLessonPage;
