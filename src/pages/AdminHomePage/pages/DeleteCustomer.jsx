import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {GET_CUSTOMERS} from "../../../queries/customerQueries";
import {useMutation} from "@apollo/client";
import {DELETE_CUSTOMER} from "../../../mutations/userMutations";
import { Button } from "@mui/material";

function DeleteCustomer({customerId}) {
    const [deleteCustomer] = useMutation(DELETE_CUSTOMER, {
        
        variables: { id: customerId },
        refetchQueries: [{ query: GET_CUSTOMERS }],
      });

      const del = () =>{
        console.log("Customer ID: "+ customerId);
        deleteCustomer();
      }
  return (
    <div>
        <Button color="error" onClick ={del}>
            <DeleteForeverIcon /> Delete
        </Button>
    </div>
  )
}

export default DeleteCustomer