import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Table, Button } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const ManageProducts = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // ---------------------------------

    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        fetch('https://calm-bayou-08028.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            })
    }, [])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://calm-bayou-08028.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    }
    return (
        <div>

            <h2>Total Orders: {products.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Image</StyledTableCell>
                            <StyledTableCell align="center">Product Name</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                            <StyledTableCell align="center">delete</StyledTableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    <img style={{ width: '70px', height: '50px' }} src={row.img} alt="" />
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.name}</StyledTableCell>
                                {/* <StyledTableCell align="center"> */}
                                    {/* ------------------------------------------------------------------------------ */}
                                    {/* <Button
                                        id="basic-button"
                                        aria-controls="basic-menu"
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        action
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}><Button onClick={() => handleDelete(row._id)}>Delete</Button></MenuItem>
                                        <MenuItem onClick={handleClose}> <NavLink to={`updateProducts/${row._id}`}><Button>Update</Button></NavLink></MenuItem>
                                       
                                    </Menu> */}

                                    {/* -------------------------------------------------------------------------------- */}
{/* 
                                </StyledTableCell> */}

                                <StyledTableCell align="center"><Button onClick={() => handleDelete(row._id)}>Delete</Button></StyledTableCell>
                                <StyledTableCell align="center"> <NavLink to={`updateProducts/${row._id}`}><Button>Update</Button></NavLink></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default ManageProducts;