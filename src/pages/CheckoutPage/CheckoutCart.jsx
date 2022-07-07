import React, { useEffect } from "react";
import {
  TableContainer,
  Container,
  Card,
  Grid,
  Typography,
  TableHead,
  Slide,
  Select,
  MenuItem,
  Button,
  ButtonGroup,
  List,
  Link,
  ListItem,
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ClearIcon from "@mui/icons-material/Clear";
import { ORDER_DETAILS } from "../../queries/orderDetails";
import { useQuery } from "@apollo/client";
import {useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeFromCart } from "./features/cartSlice";

import {} from "react-router-dom";
// import { getCartTotal } from "./features/cartSlice";

function CheckoutCart() {

const cart= useSelector((state)=>state.cart);
const dispatch = useDispatch()
const handleRemoveFromCart =(cartItem)=>{
  dispatch(removeFromCart(cartItem));
}
 

  // //loading data from database
  // const { loading, error,data } = useQuery(ORDER_DETAILS);
  // console.log(data);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Something went wrong</p>;


  return (
    <div>
      <div>
        <Container
          maxWidth="sm"
          margin="20px,0px"
          display="flex"
          flex-direction="column"
        >
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            margin="30px"
          >
            Shopping Cart
          </Typography>
        </Container>
      </div>

   

{/*  shopping cart displays here*/}
<div>              
  {cart.cartItems.length === 0 ?(
     <Grid container spacing={1}  justifyContent="center"
     alignItems="center"  padding={30}>
              <div className="cart-empty">
              <b>your cart feels Sad and Empty <SentimentVeryDissatisfiedIcon/></b>
              <div>
              <div className="start-shopping">

           
              <Link href="/" underline="none">
              <Button variant="contained" size="large"> Start Shopping Now</Button>
 
</Link>
</div>
              </div>
             
              </div>
              </Grid>
            ):(
      <React.Fragment>
        <Slide direction="up" in={true}>
          <Grid container spacing={1}>
            <Grid item md={9} container spacing={1}>
              <TableContainer>
                <Table aria-label="oreders">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" size="small">
                        {" "}
                        Item
                      </TableCell>
                      <TableCell align="center"> Quantity</TableCell>
                      <TableCell align="center"> Price</TableCell>
                      <TableCell align="center"> Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {cart.cartItems?.map((cartItem) => (
                      <TableRow key={cartItem.name}>
                        <TableCell component="th" scope="row" align="center">
                          {/* <img src={item.img} width={200} height={200} /> */}
                          <br></br>
                          <b>{cartItem.name}</b>
                        </TableCell>
                        <TableCell align="center">
                        
                     
                        <Button>-</Button>
                        <div>
                        <p className="count">{cartItem.cartQty}</p>
                        </div>
                        <Button>+</Button>
                    
                        </TableCell>
                        <TableCell align="center">
                         $ {cartItem.priceList[0].price}
                        </TableCell>
                        <TableCell align="center">
                          <Button onClick={()=>handleRemoveFromCart(cartItem)}>
                            <ClearIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item md={3} xs={12}>
              {/* <Card className={Classes.card}> */}
              <Card>
                <List>
                  <ListItem>
                    <Grid container>
                      <Typography variant="h6">
                        Subtotal:
                        {/* {cart.data.subtotal.formatted_with_symbol} */}
                      </Typography>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    {/* {cart.data.total_items >0 &&( */}
                    <Button
                    href="checkout"
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                  
                    >
                      Check Out
                    </Button>
                    {/* )} */}
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="outlined"
                      fullWidth
                      color="primary"
                      size="large"
                    >
                      Continue Shopping
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </Slide>
      </React.Fragment>
      )}
      </div>
    </div>
  );
}

// export default dynamic(()=>Promise.resolve(Cart),{
//   ssr:false,

// });
export default CheckoutCart;
