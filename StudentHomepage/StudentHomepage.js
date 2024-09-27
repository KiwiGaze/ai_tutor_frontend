import React from 'react';
import { Box, Typography, Paper, LinearProgress, Button } from '@mui/material';
import Sidebar from '../../components/Sidebar';

const HomePage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome Student
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Continue with your most recent course.
        </Typography>

        {/* Course Box */}
        <Paper sx={{ p: 2, display: 'flex', mb: 4, alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Course"
              style={{ width: '150px', height: 'auto', marginRight: 16 }}
            />
            <Box>
              <Typography variant="h6" gutterBottom>
                Your Recent Course
              </Typography>
              <Typography variant="body2" gutterBottom>
                Course information placeholder text.
              </Typography>
              <LinearProgress variant="determinate" value={50} sx={{ mb: 2 }} />
              <Button variant="contained" color="primary">
                Continue
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Assessment Box */}
        <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Assessment"
              style={{ width: '150px', height: 'auto', marginRight: 16 }}
            />
            <Box>
              <Typography variant="h6" gutterBottom>
                Upcoming Assessment
              </Typography>
              <Typography variant="body2" gutterBottom>
                Assessment information placeholder text.
              </Typography>
              <LinearProgress variant="determinate" value={30} sx={{ mb: 2 }} />
              <Button variant="contained" color="primary">
                Continue
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default HomePage;
