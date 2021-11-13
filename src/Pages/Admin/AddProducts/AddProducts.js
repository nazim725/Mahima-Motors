import React, { useState, useRef } from 'react';
import { TextField, Button } from '@mui/material';
import Zoom from 'react-reveal/Zoom';


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

        <div style={{ background: 'url("https://c4.wallpaperflare.com/wallpaper/369/754/357/pattern-simple-background-wallpaper-preview.jpg")', paddingBottom: '40px' }}>
            <Zoom>
                <form onSubmit={handleAddProducts}>
                    <h2 className="Products-heading">Add a Product</h2>
                    <TextField
                        sx={{ width: '90%', m: 1 ,input: { color: '#fff' }}}
                        id="outlined-size-small"
                        inputRef={nameRef}
                        label="Product Name"
                        variant="standard"
                        className='input-field'
                        InputLabelProps={{
                            style: { color: '#fff', paddingLeft: '10px' }
                        }}
                        required
                    />
                    <TextField
                        sx={{ width: '90%', m: 1,input: { color: '#fff' } }}
                        id="outlined-size-small"
                        inputRef={descriptionRef}
                        label="Description"
                        variant="standard"
                        className='input-field'
                        InputLabelProps={{
                            style: { color: '#fff', paddingLeft: '10px' }
                        }}
                        required
                    />
                    <TextField
                        sx={{ width: '90%', m: 1,input: { color: '#fff' } }}
                        id="outlined-size-small"
                        inputRef={imgRef}
                        label="Image URL"
                        variant="standard"
                        className='input-field'
                        InputLabelProps={{
                            style: { color: '#fff', paddingLeft: '10px' }
                        }}
                        required
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 ,input: { color: '#fff' }}}
                        id="outlined-size-small"
                        inputRef={priceRef}
                        label="Product Price"
                        variant="standard"
                        className='input-field'
                        InputLabelProps={{
                            style: { color: '#fff', paddingLeft: '10px' }
                        }}
                        required
                    />




                    <Button sx={{ width: '90%', m: 1 }} type="submit" variant="contained">Add Product</Button>
                </form>
            </Zoom>

        </div>
    );
};

export default AddProducts;