import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../Components/hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       
                    </Typography>
                    {
                        user.email &&   <NavLink style={{ textDecoration: 'none' }} to="/dashboard"> <Button sx={{ m: 1 }} variant="contained">Dashboard</Button></NavLink>
                    }

                    <NavLink style={{ textDecoration: 'none' }} to="/home"> <Button sx={{ m: 1 }} variant="contained">Home</Button></NavLink>
                    {
                        user.email ?
                            <Button variant="contained" onClick={logout} sx={{ m: 1 }}>logout</Button>
                            :
                            <NavLink style={{ textDecoration: 'none' }} to="/login"> <Button sx={{ m: 1 }} variant="contained">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;