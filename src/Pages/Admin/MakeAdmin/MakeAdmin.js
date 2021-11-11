import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';


const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)

    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://calm-bayou-08028.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setSuccess(true)
                }

                e.target.reset();
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="Products-heading">Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    style={{ width: '90%' }}
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}

                />
                <br />

                <Button style={{ width: '90%' }} sx={{ mt: 2 }} type="submit" variant="contained">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Successfully Make Admin</Alert>
            }
        </div>
    );
};

export default MakeAdmin;