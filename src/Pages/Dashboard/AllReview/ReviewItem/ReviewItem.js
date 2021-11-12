import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from 'react-rating';
import Zoom from 'react-reveal/Zoom';

const ReviewItem = (props) => {
    const { productName, name, price, newDate, description, img, rating } = props.review
    return (
        <div>
            <Zoom>
                <Card sx={{ maxWidth: 345, minHeight: 350, pb: 4 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="160"
                            image={img}
                            alt="green iguana"

                        />
                        <CardContent>
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
                                style={{ color: 'goldenRod' }}
                                readonly
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                initialRating={rating}
                            ></Rating>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Zoom>

        </div>
    );
};

export default ReviewItem;