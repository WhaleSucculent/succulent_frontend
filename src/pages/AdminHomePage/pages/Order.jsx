import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../../../queries/orderDetails";

import OrderRow from "./OrderRow";

export default function Order() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  console.log("Orders: "+data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {!loading && !error && (
        <TableContainer component={Paper}>
          <Typography>
            <b>Order History</b>
          </Typography>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#5e9af2" }}>
          
                <TableCell>OrderIds</TableCell>
                <TableCell align="right">Customer Name</TableCell>
                <TableCell align="right">Customer Email</TableCell>
                <TableCell align="right">Order Date</TableCell>
                <TableCell align="right">Order Status</TableCell>
                <TableCell align="right">Total Amount</TableCell>
                <TableCell align="right">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.orders.map((order) => (
                <OrderRow key={order.id} order={order} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
