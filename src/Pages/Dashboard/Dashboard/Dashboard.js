import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AddProducts from '../../Admin/AddProducts/AddProducts';
import AddReview from '../AddReview/AddReview'
import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';
import useAuth from '../../../Components/hooks/useAuth';
import Payment from '../Payment/payment'

import MyOrders from '../MyOrders/MyOrders'
import ManageAllOrders from '../../Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../../Admin/ManageProducts/ManageProducts';
import UpdateProducts from '../../Admin/UpdateProducts/UpdateProducts';



const drawerWidth = 200;

function Dashboard(props) {
    const { user, logout, admin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <NavLink to="/home">Go to Home</NavLink> <br />
            <NavLink to={`${url}`}>Dashboard</NavLink> <br />
            {
                admin && <Box>
                    <NavLink to={`${url}/addProducts`}>Add Products</NavLink> <br />
                    <NavLink to={`${url}/makeAdmin`}>Make Admin</NavLink> <br />
                </Box>
            }
            <NavLink to={`${url}/addReview`}>Add Review</NavLink> <br />
            <NavLink to={`${url}/payment`}>Payment</NavLink> <br />
            <NavLink to={`${url}/myOrders`}>My Orders</NavLink> <br />
            <NavLink to={`${url}/manageAllOrders`}>Manage All Orders</NavLink> <br />
            <NavLink to={`${url}/manageProducts`}>Manage Products</NavLink> <br />
            <Button variant="contained" onClick={logout}>Logout</Button>




        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >

                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}

                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                       <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                       <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/updateProducts/:productId`}>
                       <UpdateProducts></UpdateProducts>
                    </Route>
                </Switch>



            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;