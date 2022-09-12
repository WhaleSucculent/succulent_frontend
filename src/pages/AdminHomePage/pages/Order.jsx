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
import Loading from "components/Loading";
import Title from "../components/Title";
import { motion } from "framer-motion";
import { staggerVariants } from "assets/config/animationVariants";
import { Box, Toolbar } from "@mui/material";
import TableHeadCell from "../components/TableHeadCell";

export default function Order() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  if (loading) return <Loading />
  if (error) return <p>Error :(</p>;
  return (
    <Box sx={{ p: 2 }}>
      {!loading && !error && (
        <TableContainer component={Paper} sx={{ width: "100%", borderRadius: "20px" }} >

          <Title>
            Order History
          </Title>

          <Table aria-label="collapsible table" sx={{overflow: "hidden"}}>
            <TableHead>
              <TableRow sx={{
                fontWeight: 'bolder',
                fontFamily: 'Monstserrat',
              }}>
                <TableHeadCell>Customer ID</TableHeadCell>
                <TableHeadCell>Customer Name</TableHeadCell>
                <TableHeadCell>Customer Email</TableHeadCell>
                <TableHeadCell>Order Date</TableHeadCell>
                <TableHeadCell>Order Status</TableHeadCell>
                <TableHeadCell>Total Amount</TableHeadCell>
                <TableHeadCell>Edit</TableHeadCell>
              </TableRow>
            </TableHead>
            {data && (
              <TableBody component={motion.tbody} variants={staggerVariants} initial="start" animate="end" >
                {data.orders.map((order) => (
                  <OrderRow key={order.id} order={order} />
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
