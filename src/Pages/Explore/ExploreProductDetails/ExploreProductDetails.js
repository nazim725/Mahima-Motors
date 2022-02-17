import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../Components/hooks/useAuth";

const ExploreProductDetails = () => {
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    const url = `https://mahima-motors-server.herokuapp.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  return (
    <div
      style={{
        background: 'url("https://wallpaperaccess.com/full/4129330.jpg")',
        paddingBottom: "40px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "700px",
        paddingTop: "100px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div style={{ marginLeft: "200px" }}>
            <Typography variant="h2" color="#B2E1D5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" color="#FF5733" component="div">
              {product.description}
            </Typography>
            <Typography sx={{ my: 2 }} variant="h4" color="#B2E1D5">
              $ {product.price}
            </Typography>

            <Link to={`/purchase/${product._id}`}>
              <Button variant="contained">Go to Purchase</Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={product.img} alt="" height="100%" widtht="100%" />
        </Grid>
      </Grid>
    </div>
  );
};

export default ExploreProductDetails;
