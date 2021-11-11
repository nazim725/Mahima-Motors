import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Rating from 'react-rating';


const Review = (props) => {

    const { productName, name, img, description, newDate,rating} = props.review
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left',

                    }}>
                        <img src={img} alt="" width="100%" height="80%" />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left',

                    }}>
                        <Box>
                            <Typography gutterBottom variant="h5" component="div">
                                {productName}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                <i class="fas fa-user-alt"></i>   {name}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                <i class="fas fa-clock"></i>     {newDate}
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div">
                                {description}
                            </Typography>
                            <Rating
                            style={{color:'goldenRod'}}
                                readonly
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                initialRating={rating}
                            ></Rating>
                        </Box>

                    </Grid>


                </Grid>
            </Box>
        </div>
    );
};

export default Review;