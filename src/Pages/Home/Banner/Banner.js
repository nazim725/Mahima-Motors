import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import motor from '../../../images/motor.png'
import { Typography,Button } from '@mui/material';

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left',
                    
                }}>
                    <Box sx={{pl:3}}>
                        <Typography variant="h3" gutterBottom component="div">
                            <span> MAHIMA</span> <span>MOTORS</span>
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            <span>A Desired Satisfaction from</span> <span>MAHIMA MOTORS</span>
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            <span>More Freedom to Buy</span>
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            <span>A Desired Satisfaction from</span> <span>MAHIMA MOTORS</span>
                        </Typography>
                        <Button variant="contained">Explore Products</Button>
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