import { Box, Button, FormControl, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';
import { CheckboxWithLabel } from 'formik-mui';
import { useNavigate } from 'react-router-dom';

import { AddressForm } from '../address/address-form';
import { CheckoutStepper } from '../checkout-stepper/checkout-stepper';

import { paymentFormSchema } from './payment-form.schema';
import { initialPaymentFormValues } from './payment-form-values.initial';
import { useTranslation } from 'react-i18next';

const PaymentFormControl = styled(FormControl)(({ theme }) => ({
  display:'block',
  marginTop: theme.spacing(2),
}));

export const Payment: FunctionComponent = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/checkout/delivery');
  };
  const { t } = useTranslation();

  return (
    <>
    <CheckoutStepper />
    <Formik
      validationSchema={paymentFormSchema(t)}
      initialValues={initialPaymentFormValues}
      onSubmit={(value: any) => console.log(value)}
    >
      {({ errors, touched, values }) => (
        <Form>
          <PaymentFormControl>
            <Typography variant="h5" component="legend" gutterBottom>
              Billing Address
            </Typography>
            <Field
              component={CheckboxWithLabel}
              type="checkbox"
              name="sameAsShipping"
              Label={{ label: 'My billing address is the same as my shipping address' }}
            />
            {!values.sameAsShipping && (
              <AddressForm
                formName="billingAddress"
                errors={errors.billingAddress}
                touched={touched.billingAddress}
              />
            )}
          </PaymentFormControl>
          <Box
            textAlign="right"
            display="flex"
            justifyContent="space-between"
            mt={2}
          >
            <Button
              type="button"
              variant="contained"
              color="secondary"
              endIcon={<ArrowBackIcon />}
              size="large"
              onClick={goBack}
            >
              Previous
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<ArrowRightAltIcon />}
              size="large"
            >
              Continue
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
    </>
  );
};