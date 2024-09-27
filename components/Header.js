import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import MainPage from '../pages/MainPage/Mainpage';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Title - Customizable */}
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, textAlign: 'center' }}
        >
          AI Tutor
        </Typography>

         {/* New Box for Menu Items */}
         <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/gallery">Courses</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>

        {/* Register Button and Profile Icon - Aligned to the right */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button 
            variant="contained" 
            color="secondary" 
            sx={{ borderRadius: '50px', textTransform: 'none' }}
            component={Link} to="/register"
          >
            Register
          </Button>
          <IconButton 
            edge="end" 
            color="inherit" 
            aria-label="profile" 
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
        </Box>

        {/* Profile Menu */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header
