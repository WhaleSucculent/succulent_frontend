import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Divider, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { AddressFormValues } from '../CheckoutPage/components/address/address-form-values.interface';
import { ConfirmationProps, mapStateToProps } from '../CheckoutPage/components/confirmation/confirmation.props';
import { checkoutSelectors } from '../CheckoutPage/store/checkout.selectors';
import { Purchase } from '../CheckoutPage/components/confirmation/components/purchase';
import  getCart  from '../CheckoutPage/store/cartStore';

export default function PaymentPage() {
  return (
    <div>
      <Purchase price={getCart.cart.cartTotalAmount} tag={''}>
        <Button type="button">
          CHECK OUT
        </Button>
      </Purchase>
      <Typography variant="h3" gutterBottom textAlign={"left"}>
        {getCart.cart.cartTotalQty}
      </Typography>
    </div>
  );
};
