import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Alert } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../Components/hooks/useAuth'
import Box from '@mui/material/Box';
import Rotate from 'react-reveal/Rotate';

const Register = () => {
    const { registerUser, isLoading, user, authError } = useAuth()
    const [loginData, setLoginData] = useState({})
    const history = useHistory();



    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(value)

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not matched')
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return (
        <div style={{ background: 'url("https://c4.wallpaperflare.com/wallpaper/369/754/357/pattern-simple-background-wallpaper-preview.jpg")', paddingBottom: '40px' }}>
            <Rotate top left cascade>
                <Container>
                    <Box>
                        <Typography className="login-heading" variant="h4" gutterBottom>
                            Create Account
                        </Typography>


                        {!isLoading && <form className="login-form" onSubmit={handleLoginSubmit}>
                            <TextField
                                id="standard-basic"
                                label="Your Email"
                                variant="standard"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                sx={{ width: '75%', m: 1 }}
                                className='input-field'
                                InputLabelProps={{
                                    style: { color: '#fff', paddingLeft: '10px' },
                                }}

                            />
                            <TextField
                                id="standard-basic"
                                label="Your Name"
                                variant="standard"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                sx={{ width: '75%', m: 1 }}
                                className='input-field'
                                InputLabelProps={{
                                    style: { color: '#fff', paddingLeft: '10px' },
                                }}

                            />

                            <TextField
                                id="standard-basic"
                                label="Your Password"
                                variant="standard"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                className='input-field'
                                InputLabelProps={{
                                    style: { color: '#fff', paddingLeft: '10px' },
                                }}
                                sx={{ width: '75%', m: 1 }} />
                            <TextField
                                id="standard-basic"
                                label=" Re-Enter Your Password"
                                variant="standard"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                className='input-field'
                                InputLabelProps={{
                                    style: { color: '#fff', paddingLeft: '10px' },
                                }}
                                sx={{ width: '75%', m: 1 }} />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>

                            <NavLink sx={{ textAlign: 'center' }} style={{ textDecoration: 'none' }} to="/login"> <Button variant="text">Already Registered? Please Login</Button></NavLink>


                            {
                                isLoading && <CircularProgress />
                            }

                            {
                                user?.email && <Alert severity="success">Successfully Create Your Account</Alert>
                            }

                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            }

                        </form>}



                    </Box>
                </Container>
            </Rotate>
        </div>
    );
};

export default Register;