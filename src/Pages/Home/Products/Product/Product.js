import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Product = (props) => {
    const { name, price, description, img } = props.product
    return (
        <div>
            <Card sx={{ maxWidth: 345, minHeight: 350, pb: 4 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                       
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description.slice(0,120)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    );
};

export default Product;