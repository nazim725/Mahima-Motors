import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Table, Button } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Components/hooks/useAuth';

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

const ManageAllOrders = () => {


    const { user } = useAuth();
    const [orders, setOrders] = React.useState([])
    const [updateOrder, setUpdateOrder] = React.useState({})

    React.useEffect(() => {
        fetch('http://localhost:5000/orders/admin')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data)
            });
    }, [])


    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `               /${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
    }


    // const handleChangedStatus = id => {




    //     // ---------------------
    //     console.log(id)
    //     const url=`http://localhost:5000/orders/${id}`
    //     console.log(url)
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateOrder)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount) {

    //                 setUpdateOrder(data)

    //             }


    //         })

    // }


    // const handlestatusChange = () => {
    //     const updatedstatus = 'Approved'
    //     const updatedOrder = { customerName: orders.customerName, productPrice: orders.productPrice, email: orders.email, phone: orders.phone, address: orders.address, productName: orders.productName, status: updatedstatus };
    //     setUpdateOrder(updatedOrder)
    // }

    return (
        <div>
            <h2>Total Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Customer Name</StyledTableCell>
                            <StyledTableCell align="center">Product Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.customerName}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.productName}</StyledTableCell>
                                <StyledTableCell align="center">{row.productPrice}</StyledTableCell>
                                <StyledTableCell align="center"><Button onClick={() => handleDeleteOrder(row._id)}>Cancel Order</Button></StyledTableCell>
                                <StyledTableCell align="center"><Button variant="contained">{row.status}</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;