import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import useAuth from '../../../Components/hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';


const Purchase = () => {

    const [product, setProduct] = useState({})
    const { user } = useAuth();
    const { productId } = useParams()
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '', address: '',status:'Pending' }
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }


    useEffect(() => {
        const url = `https://calm-bayou-08028.herokuapp.com/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(data)
            })
    }, [])

    const handlePurchaseSubmit = e => {
        // collect data
        const purchaseProduct = {
            ...purchaseInfo,
            productName: product.name,
            productPrice: product.price,


        }
        // send to the server
        fetch('https://calm-bayou-08028.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Successfully Order Your Product")

                }
            });

        e.preventDefault();
    }
    return (
        <Box>
            <Navigation></Navigation>
            <Typography id="transition-modal-title" variant="h6" component="h2">
                {product.name}
            </Typography>

            <form onSubmit={handlePurchaseSubmit}>
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-password-input"
                    name="CustomerName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handleOnBlur}
                    defaultValue="Phone Number"
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="address"
                    onBlur={handleOnBlur}
                    defaultValue="Address"
                    size="small"
                />

                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Your Product Charged will be <span style={{ color: 'blue', fontWeight: 'bold' }}>{product.price}  </span>tk
                </Typography>
                <Button type="submit" variant="contained">Order Confirm</Button>
            </form>
        </Box>
    );
};

export default Purchase;