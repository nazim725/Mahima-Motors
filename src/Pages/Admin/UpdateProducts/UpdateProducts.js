import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const UpdateProducts = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const url = `http://localhost:5000/products/${productId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])


    const handleUpdateProduct = e => {
        const url = `http://localhost:5000/products/${productId}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setProduct({});

                }
            })
        e.preventDefault();
    }


    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedProduct = { name: updatedName, price: product.price, img: product.img,description:product.description };
        setProduct(updatedProduct)
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updatedProduct = { name: product.name, price: updatePrice, img: product.img,description:product.description };
        setProduct(updatedProduct)
    }

    const handleImgChange = e => {
        const updateImg = e.target.value;
        const updatedProduct = { name: product.name, price: product.price, img: updateImg ,description:product.description};
        setProduct(updatedProduct)
    }
    const handleDescriptionChange = e => {
        const updateDescription = e.target.value;
        const updatedProduct = { name: product.name, price: product.price, img: product.img,description:updateDescription };
        setProduct(updatedProduct)
    }

    return (
        <Box>
        <Typography id="transition-modal-title" variant="h6" component="h2">
            Update Products
        </Typography>

        <form onSubmit={handleUpdateProduct}>
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-password-input"
                name="name"
                onChange={handleNameChange}
                value={product.name || ''}
                
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                name="price"
                onChange={handlePriceChange}
                value={product.price || ''}
                size="small"
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                name="img"
                onChange={handleImgChange}
                value={product.img || ''}
                size="small"
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                name="description"
                onChange={handleDescriptionChange}
                value={product.description || ''}
                size="small"
            />
            <Button type="submit" variant="contained">Update</Button>
        </form>
    </Box>
    );
};

export default UpdateProducts;