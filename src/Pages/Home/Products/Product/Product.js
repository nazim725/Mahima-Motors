import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Product.css'
import Zoom from "react-reveal/Zoom";

const Product = (props) => {
    const { name, price, description, img } = props.product
    return (
        <div >
            <Zoom>
                <Card sx={{ maxWidth: 345, height: 360,}}>
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="170"
                            image={img}
                            alt="green iguana"
                            


                        />
                        <CardContent className="card-body" >
                            <Typography className="name" gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography className="price" gutterBottom variant="h5" component="div">
                                {price} TK
                            </Typography>
                            <Typography className="description1" variant="body2">
                                {description.slice(0, 150)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Zoom>

        </div>
    );
};

export default Product;