import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        {open ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            width: open ? '20%' : '60px',
            transition: 'width 0.3s',
          },
        }}
      >
        <List>
          <ListItem button component={Link} to="/student/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/student/courses">
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem button component={Link} to="/student/assessments">
            <ListItemText primary="Assessments" />
          </ListItem>
          <ListItem button component={Link} to="/student/reviews">
            <ListItemText primary="Reviews" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
