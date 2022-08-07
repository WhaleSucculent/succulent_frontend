import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditOrder from "./EditOrder";


function OrderRow({order}) {
  
    return (
     <TableRow>
         <TableCell align="center">
            {order?.id}
         </TableCell>
         <TableCell align="center">
            {order?.customer?.firstName + " "+ order?.customer?.lastName}
         </TableCell>
         <TableCell align="center">
            {order?.customer?.email}
         </TableCell>
         <TableCell align="center">
            {order?.orderDate}
         </TableCell>
         <TableCell align="center">
            {order?.orderStatus}
         </TableCell>
         <TableCell align="center">
          ${order?.productsInCart[0]?.price}
         </TableCell>
         <TableCell align="center">
            {/* need to make a component */}
            <EditOrder order={order} />
         </TableCell>
     </TableRow>
    );
}

export default OrderRow