import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Alert } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import useAuth from '../../../Components/hooks/useAuth'
import './Login.css'
import Zoom from 'react-reveal/Zoom';






const Login = () => {

    const { loginUser, authError, isLoading, user, signInWithGoogle } = useAuth()
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory();




    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(value)

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)

    }


    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }




    return (
        <div style={{ background: 'url("https://c4.wallpaperflare.com/wallpaper/369/754/357/pattern-simple-background-wallpaper-preview.jpg")', paddingBottom: '40px' }}>
            <Zoom>
                <Container>
                    <Grid container spacing={2}>
                        <Grid sx={{ mt: 8 }} item xs={12} md={12}>
                            <Typography className="login-heading" variant="h4" gutterBottom>
                                Please  Login
                            </Typography>


                            {!isLoading && <form className="login-form" onSubmit={handleLoginSubmit}>
                                <TextField
                                    id="standard-basic"
                                    label="Your Email"
                                    variant="standard"
                                    name="email"
                                    onBlur={handleOnchange}
                                    sx={{ width: '75%', m: 1 }}
                                    className='input-field'
                                    InputLabelProps={{
                                        style: { color: '#fff', paddingLeft: '10px' },
                                    }}

                                /> <br />

                                <TextField
                                    id="standard-basic"
                                    label="Your Password"
                                    variant="standard"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnchange}
                                    className='input-field'
                                    InputLabelProps={{
                                        style: { color: '#fff', paddingLeft: '10px' },
                                    }}

                                    sx={{ width: '75%', m: 1 }} />

                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login In</Button>
                                <br />

                                <NavLink style={{ textDecoration: 'none', textAlign: 'center' }} to="/register"> <Button variant="text">New User? Please Register</Button></NavLink>
                                <Button variant="contained" onClick={handleGoogleSignIn}>Sign In With Google</Button>


                                {
                                    isLoading && <CircularProgress />
                                }

                                {
                                    user?.email && <Alert sx={{ mt: 2 }} severity="success">Successfully Login in Your Account</Alert>
                                }

                                {
                                    authError && <Alert sx={{ mt: 2 }} severity="error">{authError}</Alert>
                                }


                            </form>}





                        </Grid>


                    </Grid>
                </Container >

            </Zoom>


        </div >
    );
};

export default Login;