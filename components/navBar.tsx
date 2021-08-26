import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';
import { MenuItem, Menu }  from '@material-ui/core'
import AboutModal from './aboutModal';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
    },
    title: {
      flexGrow: 1,
    },
});

export default function NavBar() {
  const classes = useStyles();
  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [show, setShow] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAbout = () => {
    handleClose();  
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleNavigate = (event) => {
      let href = '#'
      setAnchorEl(null);
      switch (event.target.id) {
        case 'home':
            href = "/";
            break;
        case 'add_item':
            href = "add";
            break;
        case 'display_items':
            href = "display";
            break;

      }
      router.push(href)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div>  
          <IconButton edge="start" className={classes.menuButton} 
                        color="inherit" aria-label="menu"
                        aria-haspopup="true"
                        onClick={handleMenu}>
            <PetsIcon/>
          </IconButton>
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
            open={open}
            onClose={handleClose}
            >
                <MenuItem onClick={handleNavigate} id="home">Home</MenuItem>
                <MenuItem onClick={handleNavigate} id="add_item">Add Woof</MenuItem>
                <MenuItem onClick={handleNavigate} id="display_items">Display All Woofs</MenuItem>
                <MenuItem onClick={handleAbout} id="about">About...</MenuItem>
            </Menu>
        </div>
          <Typography variant="h6" className={classes.title}>
               Woof App
          </Typography>
        </Toolbar>
      </AppBar>
      <AboutModal show={show} handleClose={handleCloseModal}/>
    </div>
  );
}