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
                <Card sx={{ maxWidth: 345, minHeight: 350, pb: 4 }}>
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="160"
                            image={img}
                            alt="green iguana"


                        />
                        <CardContent  >
                            <Typography className="name" gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography className="name" gutterBottom variant="h5" component="div">
                                {price} TK
                            </Typography>
                            <Typography className="description1" variant="body2" color="text.secondary">
                                {description.slice(0, 120)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Zoom>

        </div>
    );
};

export default Product;