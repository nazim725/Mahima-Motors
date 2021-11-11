import React, { useState, useRef } from 'react';
import { TextField, Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';




const AddReview = () => {
    const [date, setDate] = React.useState(new Date());
    const nameRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();
    const ratingRef = useRef();
    const productNameRef = useRef();
    const newDate = date.toLocaleDateString()

    const handleAddReview = e => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const rating = ratingRef.current.value;
        const productName = productNameRef.current.value;
        const newReview = { name, img, description, rating, newDate, productName }


        fetch('https://calm-bayou-08028.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added Your Review.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <form onSubmit={handleAddReview}>

            <h2  className="Products-heading">Add  Your Review About Our Motor Bikie</h2>
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="Product Name"
                size="small"
                inputRef={productNameRef}
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="Name"
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
                placeholder="RatingL"
                size="small"
                inputRef={ratingRef}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>


                    <DatePicker
                        disableFuture
                        // openTo="day"
                        views={['day']}
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField sx={{ width: '90%', m: 1 }} {...params} />}
                    />
                </Stack>
            </LocalizationProvider>
            <Button  sx={{ width: '90%', m: 1 }} type="submit" variant="contained">Add Review</Button>
        </form>
    );
};

export default AddReview;