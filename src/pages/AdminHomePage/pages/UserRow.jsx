import React from "react";
import TableRow from "@mui/material/TableRow";
import { useMutation } from "@apollo/client";
import TableCell from "@mui/material/TableCell";

import { DELETE_CUSTOMER } from "../../../mutations/userMutations";
import { GET_CUSTOMERS } from "../../../queries/customerQueries";
import Button from "@mui/material/Button";
import UpdateCustomer from "./UpdateCustomer";
import DeleteCustomer from "./DeleteCustomer";
function UserRow({ customer, index }) {

 
  return (
    <TableRow>
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
