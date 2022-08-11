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
  useTheme,
  useMediaQuery,
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
import OnScrollAnimationBox from "components/OnScrollAnimationBox";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import _ from 'lodash'
import { motion } from "framer-motion";
import { lineSelectedVariants, staggerVariants } from "assets/config/animationVariants";

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

  const theme = useTheme();
  const downsm = useMediaQuery(theme.breakpoints.down('sm'));
  const betweensmandmd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const betweenmdandlg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const betweenlgandxl = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const upxl = useMediaQuery(theme.breakpoints.up('xl'));


  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        {/* here is shopping cart titlebar */}

        <Title>
          Shopping Cart
        </Title>


        {/*  shopping cartitem displays here*/}
        <div>
          {/* if cartItem.lendth ==0 display continue shopping page */}
          {cart.cartItems.length === 0 ? (
            <Grid container justifyContent="center"
              alignItems="center" >
              <Box className="cart-empty" sx={{ mt: 20 }}>
                <Typography variant="h4" sx={{ mb: 4, display: "flex", alignItems: "center" }}>Your cart feels Sad and Empty <SentimentVeryDissatisfiedIcon fontSize="2rem" /></Typography>

                <Link to="/" underline="none">
                  <Button variant="contained" size="large"> Start Shopping Now</Button>
                </Link>

              </Box>
            </Grid>
          ) : (
            // if cartItem is not ==0, display shopping cart items.
            <Box >
              <Grid container  >
                <Grid item md={9} xs={12} container spacing={1} sx={{ width: "100%", borderRadius: "20px" }}>
                  <TableContainer component={Paper} >
                    <Table aria-label="oreders">
                      <TableHead>
                        <TableRow>
                          <TableHeadCell align="center" size="small">
                            Item
                          </TableHeadCell>
                            <TableHeadCell align="center"> {downsm ? `Qty` : `Quantity`} </TableHeadCell>
                          <TableHeadCell align="center"> Price</TableHeadCell>
                          <TableHeadCell align="center"> Action</TableHeadCell>
                        </TableRow>
                      </TableHead>
                        <TableBody component={motion.div} variants={staggerVariants} initial="start" animate="end" >
                        {console.log(cart)}
                        {cart.cartItems.length > 0 && cart.cartItems?.map((cartItem) => (
                          <TableRow key={cartItem.name} component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <TableCell component="th" scope="row" align="center" width={200} height={200} sx={{overflow: "hidden"}}>
                              <img src={cartItem.image[0].imageLink} width={"100%"}  alt={cartItem.name}/>
                              <br></br>
                              <b size='large'>{cartItem.name}</b>
                            </TableCell>
                            <TableCell align="center" sx={{ display: "flex", flexDirection: {xs: "column", md: "row"} , alignItems: "center", justifyContent: "center", pt: {xs:"50%", lg:"50%",xl: "43%"} }} >

                              <Button onClick={() => handleDecreaseCartQty(cartItem)} sx={{ fontSize: "2rem" }}><RemoveCircleOutlineIcon /></Button>
                              <Typography mx={2}>
                                {cartItem.cartQty}
                              </Typography>
                              <Button onClick={() => handleIncreaseCartQty(cartItem)}><AddCircleOutlineIcon /></Button>

                            </TableCell>
                            <TableCell align="center" sx={{fontsize: {xs: "1rem", md: "1.2rem"}}}>
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

                  <List>
                    <ListItem>
                      <Grid container>
                        <Typography variant="h6" fontSize="20px">
                          <b>Subtotal:</b>
                          <Typography>
                            <span>${_.round(cart.cartTotalAmount, 2)}</span>
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
                </Grid>
              </Grid>
            </Box>)}
        </div>

      </Box>
      {cart.cartItems.length === 0 ? (<Box sx={{ position: "absolute", bottom: 0, width: "100%" }} >
        <Footer />
      </Box>) : <Footer />}

    </>
  );
}




export default CheckoutCart;
