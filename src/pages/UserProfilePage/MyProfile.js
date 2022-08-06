import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Button, Paper} from '@mui/material';
import {GET_CUSTOMER} from "../../mutations/userMutations";
import {GET_ME} from '../../queries/customerQueries';
import { useQuery } from '@apollo/client';

// function createData(OrderNumber, Date, ShippingAddress, Total, View) {
//   return { OrderNumber, Date, ShippingAddress, Total, View};
// }
//dummy data
// const rows = [
//   createData('4757657', '05/11/2020', '123 Main St', '$147.57', <Button variant="contained" sx={ { borderRadius: 28, backgroundColor:'#ffb2cc' } }>View</Button>
//   ),
//   createData('4757657', '05/12/2020', '123 Center St', '$78.57', <Button variant="contained" sx={ { borderRadius: 28, backgroundColor:'#ffb2cc' } }>View</Button>),

// ];

export default function DenseTable() {
  return (
    <TableContainer component={Paper} sx={{maxWidth:'80%', margin:'0 auto'}}>
      <Table sx={{ maxWidth: '80%', margin: '0 auto'}} size="small" aria-label="a dense table">
        <TableHead>
        <Typography variant='h5'>
        My Orders
        </Typography>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Shipping Address</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow
              key={row.OrderNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.OrderNumber}
              </TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.ShippingAddress}</TableCell>
              <TableCell align="right">{row.Total}</TableCell>
              <TableCell align="right">{row.View}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}