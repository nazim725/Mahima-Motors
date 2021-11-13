import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';
import Zoom from 'react-reveal/Zoom';


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

        <div style={{ background: 'url("https://c4.wallpaperflare.com/wallpaper/369/754/357/pattern-simple-background-wallpaper-preview.jpg")', paddingBottom: '40px' }}>
            <Zoom>
                <div >

                    <h2 className="Products-heading">Make An Admin</h2>
                    <form onSubmit={handleAdminSubmit}>
                        <TextField
                            style={{ width: '90%' }}
                            id="outlined-password-input"
                            type="email"
                            onBlur={handleOnBlur}
                            label="Product Name"
                            variant="standard"
                            className='input-field'
                            InputLabelProps={{
                                style: { color: '#fff', paddingLeft: '10px' }
                            }}
                            required

                        />
                        <br />

                        <Button style={{ width: '90%' }} sx={{ mt: 2 }} type="submit" variant="contained">Make Admin</Button>
                    </form>
                    {
                        success && <Alert severity="success">Successfully Make Admin</Alert>
                    }


                </div>

            </Zoom>

        </div>
    );
};

export default MakeAdmin;