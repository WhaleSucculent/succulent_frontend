import { Box, Button, FormControl, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Form, Formik } from "formik";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DeliveryFormValues } from "../../pages/CheckoutPage/components/delivery/delivery-form-values.interface";
import { deliveryFormSchema } from "../../pages/CheckoutPage/components/delivery/delivery-form.schema";
import {
  DeliveryFormProps,
  mapDispatchToProps,
  mapStateToProps,
} from "../../pages/CheckoutPage/components/delivery/delivery.props";
import { useMeQuery } from "queries/utilQueries";
import { ProfileAddressForm } from "./profileaddress-form";
import { SignupForm } from "./profilesignup-form";

const DeliveryFormControl = styled(FormControl)(({ theme }) => ({
  display: "block",
  textAlign: "left",
  marginTop: theme.spacing(2),
}));

const ProfileSignupForm: FunctionComponent<DeliveryFormProps> = ({
  deliveryForm,
  submitDeliveryForm,
  clearDeliveryForm,
}) => {
  const navigate = useNavigate();
  const submitForm = (values: DeliveryFormValues) => {
    submitDeliveryForm(values);
    // logic redirect
    navigate("/checkout/payment");
  };
  const { t } = useTranslation();

  const { data, loading, error } = useMeQuery();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <Formik
        enableReinitialize={true}
        validationSchema={deliveryFormSchema(t)}
        initialValues={data.me.orders[0]}
        onSubmit={submitForm}
      >
        {({ errors, touched, values }) => (
          <Form>
            <DeliveryFormControl>
              <Typography variant="h5" component="legend" gutterBottom>
                {t("checkout.customerInfo")}
              </Typography>
              <SignupForm
                formName="signup"
                errors={errors.signup}
                touched={touched.signup}
                values={values.signup}
              />
            </DeliveryFormControl>

            <Box textAlign="right" mt={2}>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSignupForm);
