import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Button, Paper, Box, Toolbar } from '@mui/material';
import { GET_CUSTOMER } from "../../mutations/userMutations";
import { GET_ME } from '../../queries/customerQueries';
import { useQuery } from '@apollo/client';
import Title from "pages/AdminHomePage/components/Title";
import TableHeadCell from 'pages/AdminHomePage/components/TableHeadCell';



// function createData(OrderNumber, Date, ShippingAddress, Total, View) {
//   return { OrderNumber, Date, ShippingAddress, Total, View};
// }
// //dummy data
// const rows = [
//   createData('4757657', '05/11/2020', '123 Main St', '$147.57', <Button variant="contained" sx={ { borderRadius: 28, backgroundColor:'#ffb2cc' } }>View</Button>
//   ),
//   createData('4757657', '05/12/2020', '123 Center St', '$78.57', <Button variant="contained" sx={ { borderRadius: 28, backgroundColor:'#ffb2cc' } }>View</Button>),

// ];

export default function DenseTable() {
  const { loading, error, data } = useQuery(GET_ME);
  console.log(data);
  return (
    <Box>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          pt: { xs: 1, sm: 1, xl: 4 },
          pb: { xs: 1, sm: 1, xl: 4 },
        }}
      >
        <Title>
          My Orders
        </Title>
      </Toolbar>

      <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table sx={{ width: '100%' }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableHeadCell>Order Number</TableHeadCell>
              <TableHeadCell align="right">Order Date</TableHeadCell>
              <TableHeadCell align="right">Shipping Address</TableHeadCell>
              <TableHeadCell align="right">Total</TableHeadCell>
              <TableHeadCell align="right">View</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {data.me.orders[0].id}
              </TableCell>
              <TableCell>
                {data.me.orders[0].orderDate}
              </TableCell>
              <TableCell>
                {data.me.orders[0].shippingAddress.apartment + ' ' + data.me.orders[0].shippingAddress.city}
              </TableCell>
              <TableCell>
                {data.me.orders[0].productsInCart[0].price}
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{ borderRadius: 28, backgroundColor: '#ffb2cc' }}>View</Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                {data.me.orders[1].id}
              </TableCell>
              <TableCell>
                {data.me.orders[1].orderDate}
              </TableCell>
              <TableCell>
                {data.me.orders[1].shippingAddress.apartment + ' ' + data.me.orders[1].shippingAddress.city}
              </TableCell>
              <TableCell>
                {data.me.orders[1].productsInCart[1].price}
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{ borderRadius: 28, backgroundColor: '#ffb2cc' }}>View</Button>
              </TableCell>
            </TableRow>
            {/* <TableRow            >
              <TableCell component="th" scope="row">
                {row.OrderNumber}
              </TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.ShippingAddress}</TableCell>
              <TableCell align="right">{row.Total}</TableCell>
              <TableCell align="right">{row.View}</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}