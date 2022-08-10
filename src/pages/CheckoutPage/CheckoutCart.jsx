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
  ListItem,
  Box,
  Paper,
  Toolbar,
} from "@mui/material";
import Divider from '@mui/material/Divider';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ClearIcon from "@mui/icons-material/Clear";
import { ORDER_DETAILS } from "../../queries/orderDetails";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { addToMyCart, decreaseCartQty, getTotals, removeFromCart } from "./features/cartSlice";
import { } from "react-router-dom";
import Link from "components/Link";
import Title from "pages/AdminHomePage/components/Title";
import TableHeadCell from "pages/AdminHomePage/components/TableHeadCell";
import Footer from "../../components/Footer";


function CheckoutCart() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch])

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  }
  const handleDecreaseCartQty = (cartItem) => {
    dispatch(decreaseCartQty(cartItem))
  }
  const handleIncreaseCartQty = (cartItem) => {
    dispatch(addToMyCart(cartItem))
  }


  return (
    <Box sx={{mx: 10}}>
      {/* here is shopping cart titlebar */}
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          pt: { xs: 1, sm: 1, xl: 4 },
          pb: { xs: 1, sm: 1, xl: 4 },
        }}
      >
        <Title>
          Shopping Cart
        </Title>

      </Toolbar>

      {/*  shopping cartitem displays here*/}
      <div>
        {/* if cartItem.lendth ==0 display continue shopping page */}
        {cart.cartItems.length === 0 ? (
          <Grid container spacing={1} justifyContent="center"
            alignItems="center" padding={30}>
            <div className="cart-empty">
              <b>your cart feels Sad and Empty <SentimentVeryDissatisfiedIcon /></b>
              <div>
                <div className="start-shopping">


                  <Link to="/" underline="none">
                    <Button variant="contained" size="large"> Start Shopping Now</Button>

                  </Link>
                </div>
              </div>
            </div>
              <Footer/>
          </Grid>
        ) : (
          // if cartItem is not ==0, display shopping cart items.
          <div>
          <Box >
            <Slide direction="up" in={true}>
              <Grid container spacing={4} >
                <Grid item md={9} container spacing={1} sx={{ width: "100%", borderRadius: "20px" }}>
                  <TableContainer component={Paper} >
                    <Table aria-label="oreders">
                      <TableHead>
                        <TableRow>
                          <TableHeadCell align="center" size="small">
                            Item
                          </TableHeadCell>
                          <TableHeadCell align="center"> Quantity</TableHeadCell>
                          <TableHeadCell align="center"> Price</TableHeadCell>
                          <TableHeadCell align="center"> Action</TableHeadCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {console.log(cart)}
                        {cart.cartItems.length > 0 && cart.cartItems?.map((cartItem) => (
                          <TableRow key={cartItem.name}>
                            <TableCell component="th" scope="row" align="center">
                              <img src={cartItem.image[0].imageLink} width={200} height={200} alt={cartItem.name} />
                              <br></br>
                              <b size='large'>{cartItem.name}</b>
                            </TableCell>
                            <TableCell align="center">


                              <Button onClick={() => handleDecreaseCartQty(cartItem)}>-</Button>
                              <div>
                                <p className="count">{cartItem.cartQty}</p>
                              </div>
                              <Button onClick={() => handleIncreaseCartQty(cartItem)}>+</Button>

                            </TableCell>
                            <TableCell align="center">
                              $ {cartItem.priceList[0].price}
                            </TableCell>
                            <TableCell align="center">
                              <Button onClick={() => handleRemoveFromCart(cartItem)}>
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
                  {/* here display the Subtotal card on the side */}
                  <Card>
                    <List>
                      <ListItem>
                        <Grid container>
                          <Typography variant="h6" fontSize="20px">
                            <b>Subtotal:</b>
                            <Typography>
                              <span>${cart.cartTotalAmount}</span>
                            </Typography>
                          </Typography>

                        </Grid>
                      </ListItem>
                      <ListItem>
                        <Typography variant="h6" fontSize="20px">
                          <b>Duties & Taxes: </b>
                          <Typography>
                            <span>${(cart.cartTotalAmount * 0.05).toFixed(2)}</span>
                          </Typography>



                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="h6" fontSize="20px">
                          <b>Shipping:</b>
                          <Typography>
                            <p>To be calculated...</p>
                          </Typography>

                        </Typography>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <Typography variant="h6" textAlign="left" fontWeight="bold" fontSize="25px">
                          <b>Total:</b>
                          <Typography textAlign="right" fontWeight="bold" fontSize="25px">
                            ${(cart.cartTotalAmount * 1.05).toFixed(2)}
                          </Typography>



                        </Typography>
                      </ListItem>
                      <ListItem>

                        <Button
                          href="checkout"
                          type="button"
                          fullWidth
                          variant="contained"
                          color="primary"
                          size="large"

                        >
                          Check Out
                        </Button>

                      </ListItem>
                      <ListItem>

                        <Button
                          href="/"
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
          </Box>
         
       </div> )}
      </div>
      
    </Box>
    
  );
}




export default CheckoutCart;
