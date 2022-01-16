import React, {useState, useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../helpers/firebase';
import { Avatar } from '@mui/material';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';

const Navbar = () => {
  const navigate = useNavigate()
  const {currentUser} = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogin = () => {
    setAnchorEl(null)
    navigate('/login')
  }
  const handleRegister = () => {
    setAnchorEl(null)
    navigate('/register')
  }
  const handleProfile = () => {
    setAnchorEl(null)
    navigate('/profile')
  }
  const handleNew = () => {
    setAnchorEl(null)
    navigate('/newblog')
  }
  const handleOut = async () => {
    setAnchorEl(null)
    await signOut(auth)
    navigate('/')
  }

  console.log(currentUser)


  return (
    <Box >
      <AppBar position="static" sx={{backgroundColor:'#24292E'}}>
        <Toolbar sx={{display:'flex', justifyContent: 'space-between'}}>
        
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Avatar sx={{backgroundColor:'#fff', color:'#24292E' }}><HomeOutlinedIcon onClick={() =>navigate('/')}/></Avatar>
          </IconButton>
          <Typography position="static" onClick={() =>navigate('/')} variant="h6" component="div" sx={{cursor:'pointer'}}>
            Papbu | <span style={{fontSize:'smaller'}}>Sunday Magazine</span> 
          </Typography>
          <Box>{(currentUser)? (
            <div style={{display:'flex', alignItems:'center'}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar sx={{backgroundColor:'#fff', color:'#24292E' }}>
                {(currentUser.displayName)?.split(" ").map(str => str[0]).join("").toUpperCase()}
                </Avatar>
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
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleNew}>New</MenuItem>
                <MenuItem onClick={handleOut}>Logout</MenuItem>
              </Menu>
            </div>
          ):(
            <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar sx={{backgroundColor:'#fff', color:'#24292E' }}><LoginTwoToneIcon/></Avatar>
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
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogin}>Login</MenuItem>
              <MenuItem onClick={handleRegister}>Register</MenuItem>
            </Menu>
          </div>
          )}</Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar