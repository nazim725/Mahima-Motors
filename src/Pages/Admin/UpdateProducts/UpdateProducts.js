import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const UpdateProducts = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const url = `https://calm-bayou-08028.herokuapp.com/products/${productId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const handleUpdateProduct = (e) => {
    const url = `https://calm-bayou-08028.herokuapp.com/products/${productId}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setProduct({});
        }
      });
    e.preventDefault();
  };

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedProduct = {
      name: updatedName,
      price: product.price,
      img: product.img,
      description: product.description,
    };
    setProduct(updatedProduct);
  };
  const handlePriceChange = (e) => {
    const updatePrice = e.target.value;
    const updatedProduct = {
      name: product.name,
      price: updatePrice,
      img: product.img,
      description: product.description,
    };
    setProduct(updatedProduct);
  };

  const handleImgChange = (e) => {
    const updateImg = e.target.value;
    const updatedProduct = {
      name: product.name,
      price: product.price,
      img: updateImg,
      description: product.description,
    };
    setProduct(updatedProduct);
  };
  const handleDescriptionChange = (e) => {
    const updateDescription = e.target.value;
    const updatedProduct = {
      name: product.name,
      price: product.price,
      img: product.img,
      description: updateDescription,
    };
    setProduct(updatedProduct);
  };

  return (
    <div
      style={{
        background:
          'url("https://c4.wallpaperflare.com/wallpaper/369/754/357/pattern-simple-background-wallpaper-preview.jpg")',
        paddingBottom: "40px",
        height: "700px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: "60px",
      }}
    >
      <Box>
        <Typography
          className="login-heading"
          id="transition-modal-title"
          variant="h4"
          component="h2"
          style={{ paddingBottom: "40px" }}
        >
          Update Products
        </Typography>

        <form className="add-form" onSubmit={handleUpdateProduct}>
          <TextField
            sx={{ width: "90%", m: 1, input: { color: "#fff" } }}
            id="outlined-password-input"
            name="name"
            onChange={handleNameChange}
            value={product.name || ""}
            className="input-field"
            required
          />
          <TextField
            sx={{ width: "90%", m: 1, input: { color: "#fff" } }}
            id="outlined-size-small"
            name="price"
            onChange={handlePriceChange}
            value={product.price || ""}
            className="input-field"
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1, input: { color: "#fff" } }}
            id="outlined-size-small"
            name="img"
            onChange={handleImgChange}
            value={product.img || ""}
            className="input-field"
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1, input: { color: "#fff" } }}
            id="outlined-size-small"
            name="description"
            onChange={handleDescriptionChange}
            value={product.description || ""}
            size="small"
            className="input-field"
          />
          <Button sx={{ width: "90%", m: 1 }} type="submit" variant="contained">
            Update
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default UpdateProducts;
