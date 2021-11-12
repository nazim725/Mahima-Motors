import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import motor from '../../../images/motor.png'
import { Typography,Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <Box style={{background:'url("https://c4.wallpaperflare.com/wallpaper/369/754/357/pattern-simple-background-wallpaper-preview.jpg")',marginTop:'9px'}} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left',
                    
                }}>
                    <Box sx={{pl:3}}>
                        <Typography variant="h3" gutterBottom component="div">
                            <span className="heading-name"> MAHIMA</span> <span className="heading-subName">MOTORS</span>
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            <span className="heading-2nd">A Desired Satisfaction from</span> <span  className="heading-2nd">MAHIMA MOTORS</span>
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            <span  className="heading-2nd">More Freedom to Buy</span>
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            <span className="heading-subName">Welcome to </span> <span className="heading-name">MAHIMA MOTORS</span>
                        </Typography>
                       <NavLink style={{textDecoration:'none'}} to="/explore"> <Button variant="contained">Explore Products</Button></NavLink>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img src={motor} alt="" width="100%" />
                </Grid>


            </Grid>
        </Box>
    );
};

export default Banner;