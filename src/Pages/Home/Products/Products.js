import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Product from './Product/Product';
import './Products.css'
import Button from '@mui/material/Button';

const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://calm-bayou-08028.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            })
    }, [])
    return (
        <div style={{background:'url("https://wallpaperaccess.com/full/4129330.jpg")',marginTop:'-30px',paddingBottom:'20px'}}>
            <h3 className="Products-heading">Our Awesome Products</h3>
            <div className="products-container">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>).slice(0, 6)
                }
            </div>

            <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
            <NavLink style={{textDecoration:'none'}} to="/explore"> <Button variant="contained">Explore Products</Button></NavLink>
            </div>


        </div> 
    );
};

export default Products;