import React, { useState, useEffect } from 'react';
import NavigationBar from '../../Shared/Navigation/NavigationBar';
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
        <div style={{ background: 'url("https://wallpaperaccess.com/full/4129330.jpg")',paddingBottom:'40px' }}>
            <NavigationBar></NavigationBar>
            <h3 className="Products-heading">Our Awesome Products</h3>
            <div className="products-container">
                {
                    products.map(product => <ExploreProduct key={product._id} product={product}></ExploreProduct>)
                }
            </div>


        </div>
    );
};

export default Explore;