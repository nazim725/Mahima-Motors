import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import "./ExploreProduct.css";

const ExploreProduct = (props) => {
  const { name, price, description, img, _id } = props.product;
  return (
    <div>
      <Zoom>
        <Card sx={{ maxWidth: 345, height: 440, pb: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={img}
              alt="green iguana"
            />
            <CardContent className="card-body">
              <Typography
                className="name"
                gutterBottom
                variant="h5"
                component="div"
              >
                {name}
              </Typography>
              <Typography
                className="price"
                gutterBottom
                variant="h5"
                component="div"
              >
                {price} TK Only
              </Typography>
              <Typography className="products-description" variant="body2">
                {description.slice(0, 147)}
              </Typography>

              <Box sx={{ my: 2 }}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/exploreProductDetails/${_id}`}
                >
                  <Button
                    variant="contained"
                    color="success"
                    style={{ marginLeft: "45px" }}
                  >
                    View Product Details
                  </Button>
                </NavLink>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Zoom>
    </div>
  );
};

export default ExploreProduct;
