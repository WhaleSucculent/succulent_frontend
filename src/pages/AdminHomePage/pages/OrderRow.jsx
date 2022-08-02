import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditOrder from "./EditOrder";


function OrderRow({order}) {
  
    return (
     <TableRow>
         <TableCell align="right">
            {order.id}
         </TableCell>
         <TableCell align="right">
            {order.customer.firstName + " "+ order.customer.lastName}
         </TableCell>
         <TableCell align="right">
            {order.customer.email}
         </TableCell>
         <TableCell align="right">
            {order.orderDate}
         </TableCell>
         <TableCell align="right">
            {order.orderStatus}
         </TableCell>
         <TableCell>
            
         </TableCell>
         <TableCell>
            {/* need to make a component */}
            <EditOrder order={order} />
         </TableCell>
     </TableRow>
    );
}

export default OrderRow