import * as React from 'react';
import { Box, Container, CssBaseline, Grid, Paper, Toolbar, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../../../queries/customerQueries';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UserRow from './UserRow';
import { motion } from 'framer-motion';
import { staggerVariants } from 'assets/config/animationVariants';
import Loading from 'components/Loading';
import Title from '../components/Title';
import TableHeadCell from '../components/TableHeadCell';

export default function Users() {

  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  if (loading) return <Loading />
  if (error) return <Typography>Something went wrong</Typography>
  return (
    <Box sx={{ p: 2 }}>
      {
        !loading && !error && (
          <TableContainer component={Paper} sx={{ width: "100%", borderRadius: "20px" }} >
              <Title >Customers</Title>
            <Table sx={{ minWidth: 650, overflow: "hidden" }}>
              <TableHead>
                <TableRow sx={{
                  fontWeight: 'bolder',
                  fontFamily: 'Monstserrat',
                }}>
                  <TableHeadCell>ID</TableHeadCell>
                  <TableHeadCell>First Name</TableHeadCell>
                  <TableHeadCell>Last Name</TableHeadCell>
                  <TableHeadCell>Email Address</TableHeadCell>
                  <TableHeadCell>Status</TableHeadCell>
                  <TableHeadCell>Delete</TableHeadCell>
                  <TableHeadCell>Edit</TableHeadCell>
                </TableRow>
              </TableHead>
              {data && (
                <TableBody component={motion.tbody} variants={staggerVariants} initial="start" animate="end" >
                  {data.customers.map((customer, index) => (
                    <UserRow key={customer.id} customer={customer} index={index} />
                  )
                  )}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        )
      }

    </Box>
  );
}
