import * as React from 'react';
import { CssBaseline, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../../../queries/customerQueries';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UserRow from './UserRow';
import { setContext } from "@apollo/client/link/context";
import { motion } from 'framer-motion';
import { lineSelectedVariants, staggerVariants } from 'assets/config/animationVariants';
import Loading from 'components/Loading';



export default function Users() {

  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  if (loading) return <Loading/>
  if (error) return <Typography>Something went wrong</Typography>
  return (
    <div>
      <CssBaseline />
      {
        !loading && !error && (
          <TableContainer sx={{ marginTop: "5em", display: 'flex', justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Table sx={{ minWidth: 650 }} stickyHeader={true}>

              <TableHead>
                <TableRow sx={{ backgroundColor: '#5e9af2' }}>
                  <TableCell>ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              {data && (
                <TableBody component={motion.div} variants={staggerVariants}  initial="start" animate="end" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  {data.customers.map((customer, index) => (
                    <UserRow component={motion.div} variants={lineSelectedVariants} key={customer.id} customer={customer} index={index} />
                  )
                  )}
                </TableBody>
              )}


            </Table>
          </TableContainer>
        )
      }
    </div>
  );
}
