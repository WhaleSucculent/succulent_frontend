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
    addToMyCart(state, action) {

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id=== action.payload.id);

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

    removeFromCart(state,action){
      const nextCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      )

      state.cartItems =nextCartItems;
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems));

      toast.error(`${action.payload.name} removed from cart!`,{
        position:"bottom-left"
      });

    },

 
   },
});

export const {removeFromCart, addToMyCart} = cartSlice.actions;
export default cartSlice.reducer;
