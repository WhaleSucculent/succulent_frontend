import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
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
import EditIcon from '@mui/icons-material/Edit';


/* function createData(OrderNumber, Date, ShippingAddress, Total, View) {
  return { OrderNumber, Date, ShippingAddress, Total, View};
} */
//dummy data
/* const rows = [
  createData('Email', $email),
  // createData('Address', 'passwd', <Button variant="contained" sx={ { borderRadius: 28, backgroundColor:'#ffb2cc' } }>View</Button>)

]; */

export default function DenseTable() {
  const {loading, error, data} = useQuery(GET_ME);
  console.log(data);

  return (
    <TableContainer component={Paper} sx={{maxWidth:'80%', margin:'0 auto'}}>
      <Table sx={{ maxWidth: '80%', margin: '0 auto'}} size="small" aria-label="a dense table">
        <TableHead>
        <Typography variant='h5'>
        My Profile
        </Typography>
        </TableHead>
        <TableBody>
              <TableRow>
              <TableCell>
              First Name
              </TableCell>
              <TableCell>
                {data.me.firstName}
              </TableCell>
              <TableCell>
                <Button>
                  <EditIcon/>
              </Button>
              </TableCell>
              </TableRow>

              <TableRow>
              <TableCell>
              Last Name
              </TableCell>
              <TableCell>
                {data.me.lastName}
              </TableCell>
              <TableCell>
                <Button>
                  <EditIcon/>
              </Button>
              </TableCell>
              </TableRow>

              <TableRow>
              <TableCell>
              Email
              </TableCell>
              <TableCell>
                {data.me.email}
              </TableCell>
              <TableCell>
                <Button>
                  <EditIcon/>
              </Button>
              </TableCell>
              </TableRow>

              <TableRow>
              <TableCell>
              Phone
              </TableCell>
              <TableCell>
                {data.me.phone}
              </TableCell>
              <TableCell>
                <Button>
                  <EditIcon/>
              </Button>
              </TableCell>
              </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
