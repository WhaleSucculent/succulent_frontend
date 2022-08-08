import React from "react";
import TableRow from "@mui/material/TableRow";
import { useMutation } from "@apollo/client";
import TableCell from "@mui/material/TableCell";

import { DELETE_CUSTOMER } from "../../../mutations/userMutations";
import { GET_CUSTOMERS } from "../../../queries/customerQueries";
import Button from "@mui/material/Button";
import UpdateCustomer from "./UpdateCustomer";
import DeleteCustomer from "./DeleteCustomer";
import { motion } from "framer-motion";
import { lineSelectedVariants } from "assets/config/animationVariants";
import { staggerVariants } from 'assets/config/animationVariants';


function UserRow({ customer, index }) {


  return (
    <TableRow component={motion.div} variants={lineSelectedVariants} animate="open" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
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
