import * as React from "react";
import { styled } from "@mui/material/styles";
import { Table, Button } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../../../Components/hooks/useAuth";
import Zoom from "react-reveal/Zoom";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    const url = `https://mahima-motors-server.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  console.log(orders);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://mahima-motors-server.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrder = orders.filter((order) => order._id !== id);
            setOrders(remainingOrder);
          }
        });
    }
  };

  return (
    <Zoom>
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
                <StyledTableCell align="center">Payment Status</StyledTableCell>
                {/* <StyledTableCell align="center"> Admin Status</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.customerName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.productName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.price}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button onClick={() => handleDeleteOrder(row._id)}>
                      Cancel Order
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.status}</StyledTableCell>
                  {/* <StyledTableCell align="center">
                    {row.adminPaymentStatus}
                  </StyledTableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Zoom>
  );
};

export default MyOrders;
