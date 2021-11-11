import React, { useState, useEffect } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ExploreProduct from '../ExploreProduct/ExploreProduct';

const Explore = () => {
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
            <Navigation></Navigation>
        <h3 className="Products-heading">Our Awesome Products</h3>
        <div className="products-container">
           {
               products.map(product=><ExploreProduct key={product._id} product={product}></ExploreProduct>)
           }
        </div>


    </div>
    );
};

export default Explore;