import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

 

const cartSlice = createSlice({
  name: "cart",
  initialState:{
    cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
    totalAmount:0,
    totalQty:0
  },
  reducers: {
    addToCart(state, action) {

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id);

        if(itemIndex >=0){
          state.cartItems[itemIndex].cartQty +=1;
          toast.info(`Increased ${action.payload.name} quantity.`,{
            position:"bottom-left"
          });
        }
        else{
          const tempProduct ={...action.payload,cartQty:1};
          state.cartItems.push(tempProduct);
          toast.success(`${action.payload.name} added successfully!`,{
            position:"bottom-left"
          });

        }

      localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
    },

  //   getCartTotal:(state) =>{
  //     let {totalAmount,totalCount}= state.items.reduce((cartTotal,cartItem) =>{
  //       const {price,amount} = cartItem;
  //       const itemTotal = price * amount;
  //       cartTotal.totalAmount += itemTotal;
  //       cartTotal.totalCount += amount;

  //       return cartTotal;
  //     },
  //     {
  //       totalAmount:0,totalCount:0
  //     });
  //     state.totalAmount = parseInt(totalAmount.toFixed(2));
  //     state.totalCount = totalCount;

  //   }
   },
});

export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;
