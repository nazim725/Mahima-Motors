import React, { useState, useEffect } from "react";
import NavigationBar from "../../Shared/Navigation/NavigationBar";
import ExploreProduct from "../ExploreProduct/ExploreProduct";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mahima-motors-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
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
        height: "2000px",
      }}
    >
      <NavigationBar></NavigationBar>
      <h3
        className="Products-heading"
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        Our Awesome Products
      </h3>
      <div className="products-container">
        {products.map((product) => (
          <ExploreProduct key={product._id} product={product}></ExploreProduct>
        ))}
      </div>
    </div>
  );
};

export default Explore;
