import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Button, Paper, Container } from '@mui/material';
import { GET_CUSTOMER } from "../../mutations/userMutations";
import { GET_ME } from '../../queries/customerQueries';
import { useQuery } from '@apollo/client';
import EditIcon from '@mui/icons-material/Edit';
import Title from 'pages/AdminHomePage/components/Title';
import { motion } from 'framer-motion';
import { lineSelectedVariants, staggerVariants } from 'assets/config/animationVariants';
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
  const { loading, error, data } = useQuery(GET_ME);
  console.log(data);
  return (
    <Container>
      <Title>
        Shipping Addresses
      </Title>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: '100%', margin: '0 auto' }} size="small" aria-label="a dense table">

          <TableBody component={motion.div} variants={staggerVariants} initial="start" animate="end">
            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                First Name
              </TableCell>
              <TableCell>
                {data.me.orders[0].shippingAddress.firstName}
              </TableCell>
            </TableRow>

            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                Last Name
              </TableCell>
              <TableCell>
                {data.me.orders[0].shippingAddress.lastName}
              </TableCell>
            </TableRow>

            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                Address
              </TableCell>
              <TableCell>
                {data.me.orders[0].shippingAddress.apartment}
              </TableCell>
            </TableRow>

            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                City
              </TableCell>
              <TableCell>
                {data.me.orders[0].shippingAddress.city}
              </TableCell>
            </TableRow>


            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                Province
              </TableCell>
              <TableCell>
                {data.me.orders[0].shippingAddress.state}
              </TableCell>
              <TableCell>
                <Button>
                  <EditIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Title>
        Billing Address
      </Title>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableBody component={motion.div} variants={staggerVariants} initial="start" animate="end">
            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                First Name
              </TableCell>
              <TableCell>
                {data.me.orders[0].billingAddress.firstName}
              </TableCell>
            </TableRow>

            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                Last Name
              </TableCell>
              <TableCell>
                {data.me.orders[0].shippingAddress.lastName}
              </TableCell>
            </TableRow>

            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                City
              </TableCell>
              <TableCell>
                {data.me.orders[0].shippingAddress.city}
              </TableCell>
              <TableCell>
                <Button>
                  <EditIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}