import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import UpdateCustomer from "./UpdateCustomer";
import DeleteCustomer from "./DeleteCustomer";
import { motion } from "framer-motion";
import { lineSelectedVariants } from "assets/config/animationVariants";

function UserRow({ customer, index }) {
  return (
    <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} 
    >
      <TableCell>{index + 1}</TableCell>
      <TableCell>{customer.firstName}</TableCell>
      <TableCell>{customer.lastName}</TableCell>
      <TableCell>{customer.email}</TableCell>
      <TableCell>{customer.status}</TableCell>
      <TableCell>
        <DeleteCustomer customerId={customer.id} />
      </TableCell>
      <TableCell>
        <UpdateCustomer customer={customer} />
      </TableCell>
    </TableRow>
  );
}

export default UserRow;
