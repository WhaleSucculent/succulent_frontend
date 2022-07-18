import React from 'react';
import Checkout from './Checkout';
import { Purchase } from './purchase';
import { Button } from '@mui/material';

export default function PaymentPage() {
  return (
    <div>
      <Checkout />
      <Purchase price={9999.00}><Button>checkout</Button></Purchase>
    </div>
    
    // <purchase price={100.00}>
    //   <Button style={{ width: '100%', marginTop: 20 }}>Checkout</Button>
    // </purchase>
  );
};
