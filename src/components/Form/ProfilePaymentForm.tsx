import { FormControl } from "@mui/material";
import { Form, Formik } from "formik";
import React, { FunctionComponent } from "react";

import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import { paymentFormSchema } from "pages/CheckoutPage/components/payment/payment-form.schema";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import {
  PaymentFormProps,
} from "pages/CheckoutPage/components/payment/payment.props";
import { PaymentFormValues } from "pages/CheckoutPage/components/payment/payment-form-values.interface";
import { CreditCard } from "./profilecredit-form";
import { useMeQuery } from "queries/utilQueries";

const PaymentFormControl = styled(FormControl)(({ theme }) => ({
  display: "block",
  textAlign: "left",
  marginTop: theme.spacing(2),
}));

export const ProfilePaymentForm: FunctionComponent<PaymentFormProps> = () => {

  const submitForm = (values: PaymentFormValues) => {

  };

  const { t } = useTranslation();

  const { data, loading, error } = useMeQuery();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <Formik
        validationSchema={paymentFormSchema(t)}
        initialValues={data.me.creditCards[0]}
        onSubmit={submitForm}
      >
        {({ errors, touched, values, handleChange, setFieldTouched }) => (
          <Form>
            <CreditCard
              formName="creditCard"
              errors={errors.creditCard}
              touched={touched.creditCard}
              values={values}
              handleChange={handleChange}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProfilePaymentForm;
