import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea ,Button,Box} from '@mui/material';
import { NavLink } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const ExploreProduct = (props) => {
    const { name, price, description, img ,_id} = props.product
    return (
        <div>
            <Zoom>
            <Card sx={{ maxWidth: 345, height: 370, pb: 2 }}>
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

                        <Box sx={{my:2}}>
                        <NavLink style={{textDecoration:'none'}} to={`/purchase/${_id}`}><Button variant="contained" color="success">Purchase</Button></NavLink>
                        </Box>
                      
                    </CardContent>
                </CardActionArea>
            </Card>

            </Zoom>

        </div>
    );
};

export default ExploreProduct;