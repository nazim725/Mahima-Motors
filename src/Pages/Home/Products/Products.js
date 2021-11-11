import React, { useState, useEffect } from 'react';
import Product from './Product/Product';
import './Products.css'

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
        <div>
            <h3 className="Products-heading">Our Awesome Products</h3>
            <div className="products-container">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>).slice(0, 6)
                }
            </div>


        </div>
    );
};

export default Products;