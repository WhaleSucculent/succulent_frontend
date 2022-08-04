import * as React from 'react';
import { Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import {GET_CUSTOMERS} from '../../../queries/customerQueries';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UserRow from './UserRow';
import { setContext } from "@apollo/client/link/context";



export default function Users() {

  const {loading, error, data} = useQuery(GET_CUSTOMERS);
  console.log(data);

  if(loading) return <Typography>Loading...</Typography>
  if(error) return <Typography>Something went wrong</Typography>
  return (
    <div>
      {
        !loading && !error && (
          <TableContainer sx={{marginTop:"5em", display:'flex', justifyContent:"center", alignItems:"center"}}>
            <Table sx={{ minWidth: 650 }}>

              <TableHead>
                <TableRow sx={{backgroundColor:'#5e9af2'}}>
                  <TableCell>ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.customers.map((customer, index) => (
                  <UserRow key = {customer.id} customer = {customer} index={index}/>
                )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
    </div>
  );
}
