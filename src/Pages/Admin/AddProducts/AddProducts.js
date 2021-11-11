import React, { useState, useRef } from 'react';
import { TextField, Button } from '@mui/material';


const AddProducts = () => {
    const nameRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();


    const handleAddProducts = e => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const newProducts = { name, img, description, price, }


        fetch('https://calm-bayou-08028.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProducts)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added Products.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <form onSubmit={handleAddProducts}>
            <h2 className="Products-heading">Add a Product</h2>
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder=" Products Name"
                size="small"
                inputRef={nameRef}
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="description"
                size="small"
                inputRef={descriptionRef}
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="Image URL"
                size="small"
                inputRef={imgRef}
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="Products Price"
                size="small"
                inputRef={priceRef}
            />
            <Button sx={{ width: '90%', m: 1 }} type="submit" variant="contained">Add Product</Button>
        </form>
    );
};

export default AddProducts;