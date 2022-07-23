import React from 'react';
import { Typography, Divider, Box, Button } from '@mui/material';
import { Purchase } from './purchase';
import  getCart  from '../CheckoutPage/store/cartStore';

export default function PaymentPage() {
  return (
    <div>
      <Purchase price={getCart.cart.cartTotalAmount} tag={''}>
        <Button type="button">
          CHECK OUT
        </Button>
      </Purchase>
    </div>
  );
};
