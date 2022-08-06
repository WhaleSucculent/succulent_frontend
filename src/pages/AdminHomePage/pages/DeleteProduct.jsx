import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {useMutation} from "@apollo/client";
import { Button } from "@mui/material";
import {DELETE_PRODUCT} from "../../../mutations/productMutations";
import {GET_PRODUCTS} from "../../../queries/productQueries";

function DeleteProduct({product}) {
    const[deleteProduct] = useMutation(DELETE_PRODUCT, {
        variables: {id: product.id},
        refetchQueries: [{query: GET_PRODUCTS}],
    })
    const del = () =>{
        console.log("Product ID: "+ product.id);
        deleteProduct();
    }
  return (
    <div>
        <Button color="error" onClick ={del}>
            <DeleteForeverIcon />
        </Button>
    </div>
  )
}

export default DeleteProduct