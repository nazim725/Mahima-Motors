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

import './Dashboard.css'
import DashboardHome from '../DashboardHome/DashboardHome';
import AllReview from '../AllReview/AllReview/AllReview'
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';


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

        <div className="dashboard-side">
            
            <h2 className="title">MAHIMA MOTORS</h2>
            <NavLink to="/home"> <button className='navlink'>Go to Home</button></NavLink> <br />
            <NavLink to={`${url}`}><button className='navlink'>Dashboard</button></NavLink> <br />
            {
                admin && <Box>
                    <NavLink to={`${url}/addProducts`}><button className='navlink'>Add Products</button></NavLink> <br />
                    <NavLink to={`${url}/makeAdmin`}><button className='navlink'>Make Admin</button></NavLink> <br />
                    <NavLink to={`${url}/manageAllOrders`}><button className='navlink'>Manage All Orders</button></NavLink> <br />
                    <NavLink to={`${url}/manageProducts`}><button className='navlink'>Manage Products</button></NavLink> <br />
                </Box>
            }
            {
                !admin && <Box>
                    <NavLink to={`${url}/addReview`}><button className='navlink'>Add Review</button></NavLink> <br />
                    <NavLink to={`${url}/payment`}><button className='navlink'>Payment</button></NavLink> <br />
                    <NavLink to={`${url}/myOrders`}><button className='navlink'>My Orders</button></NavLink> <br />
                    <NavLink to={`${url}/allReview`}><button className='navlink'>Reviews</button></NavLink> <br />
                </Box>
            }


            {
                user.email ? <button className='navlink' onClick={logout}>Logout</button>
                    :
                    <NavLink to='/login'><button className='navlink'>Login</button></NavLink>
            }






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
                        <ToggleButton value="left" aria-label="left aligned">
                            <FormatAlignLeftIcon />
                        </ToggleButton>

                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                     { admin? <h4> Admin Dashboard</h4>:<h4> User Dashboard</h4>}
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
                        <DashboardHome></DashboardHome>
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
                    <Route path={`${path}/allReview`}>
                        <AllReview></AllReview>
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