import React, { useEffect } from "react";
import {
  TableContainer,
  Container,
  Card,
  Grid,
  Typography,
  Divider,
  TableHead,
  Slide,
  Select,
  MenuItem,
  Button,
  List,
  ListItem,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ClearIcon from "@mui/icons-material/Clear";
import { ORDER_DETAILS } from "../../queries/orderDetails";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
// import { getCartTotal } from "./features/cartSlice";

function CheckoutCart() {


  // const{items,totalAmount} = useSelector((state) => state.cart);
  // const dispatch =useDispatch();
  // useEffect (()=>{
  //  dispatch(getCartTotal());
 
 
  // },[]);
  //loading data
  const { loading, error,data } = useQuery(ORDER_DETAILS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;


 
 
 
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
                    {data.products.map((item) => (
                      <TableRow key={item.name}>
                        <TableCell component="th" scope="row" align="center">
                          {/* <img src={item.img} width={200} height={200} /> */}
                          <br></br>
                          <b>{item.name}</b>
                        </TableCell>
                        <TableCell align="center">
                          <Select
                            // labelId="quantity-label"
                            // id="quantity"
                            // onChange={(e)=>
                            // quantityChangehandler(
                            //     item,
                            //     e.target.value
                            //     )
                            // }
                            // value={item.quantity}
                          >
                            {[...Array(10).keys()].map((amount) => (
                              <MenuItem key={amount + 1} value={amount + 1}>
                                {amount + 1}
                              </MenuItem>
                            ))}
                          </Select>
                        </TableCell>
                        <TableCell align="center">
                          {item.priceList[0].price}
                        </TableCell>
                        <TableCell align="center">
                          <Button>
                            {/* <Button onClick={()=> removeFromCartHandler(item)}> */}
                            {/* // <Button style={{ color: "red" }}> */}
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
                        <Typography>
$</Typography>
                      </Typography>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    {/* {cart.data.total_items >0 &&( */}
                    <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    // onClick={processToCheckoutHandler}
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

      {/* <div>
                <TableContainer>
                <Table sx={{ minWidth: 10 }} aria-label="custom pagination table">
                <TableBody>
               
      {itemData.map((item) => (
            <TableRow>
              <TableCell component="th" scope="row" style={{width:50}} align='right'>
              <ImageList sx={{ width: '60%', height: "60%" }} cols={1} rowWide={64}>
              <img
            src={`${item.img}?w=246&h=146&fit=crop&auto=format`}
            srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
              </ImageList>
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {item.title}
                <br></br>
                {item.price}
              </TableCell>
            </TableRow>
          ))}
  
      

                </TableBody>
                </Table>
                </TableContainer>
             </div> */}
    </div>
  );
}

// export default dynamic(()=>Promise.resolve(Cart),{
//   ssr:false,

// });
export default CheckoutCart;
