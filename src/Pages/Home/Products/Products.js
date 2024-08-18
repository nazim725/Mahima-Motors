import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Product from './Product/Product'
import './Products.css'
import Button from '@mui/material/Button'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://mahima-motors-server.vercel.app/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        console.log(data)
      })
  }, [])
  return (
    <div style={{ marginTop: '30px', paddingBottom: '20px' }}>
      <h3 className="Products-heading " style={{ padding: '30px 0' }}>
        Our Awesome Products
      </h3>
      <div className="products-container">
        {products
          .map((product) => (
            <Product key={product._id} product={product}></Product>
          ))
          .slice(0, 6)}
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '18px 0' }}
      >
        <NavLink
          style={{ textDecoration: 'none', marginTop: '30px' }}
          to="/explore"
        >
          {' '}
          <Button className="see-more-button">See More >>></Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Products
