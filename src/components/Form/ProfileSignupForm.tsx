import { Box, Button, FormControl, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Form, Formik } from "formik";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { deliveryFormSchema } from "../../pages/CheckoutPage/components/delivery/delivery-form.schema";
import {
  DeliveryFormProps,
} from "../../pages/CheckoutPage/components/delivery/delivery.props";
import { useMeQuery } from "queries/utilQueries";
import { SignupForm } from "./profilesignup-form";
import { useMutation } from "@apollo/client";
import { UPDATE_MY_EMAIL_PASSWORD } from "mutations/userMutations";
import { SignupFormValues } from "pages/CheckoutPage/components/signup/signup-form-values.interface";
import { DeliveryFormValues, ProfileDeliveryFormValues } from "pages/CheckoutPage/components/delivery/delivery-form-values.interface";

import UploadIcon from "@mui/icons-material/Upload";

const DeliveryFormControl = styled(FormControl)(({ theme }) => ({
  display: "block",
  textAlign: "left",
  marginTop: theme.spacing(2),
}));

const ProfileSignupForm: FunctionComponent<DeliveryFormProps> = () => {
  const navigate = useNavigate();

  const [updateMyEmailPassword]  = useMutation(UPDATE_MY_EMAIL_PASSWORD)
  const submitForm = (values: DeliveryFormValues) => {
    console.log(values);
    // updateMyEmailPassword(values);
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
                endIcon={<UploadIcon />}
                size="large"
              >
                Update
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProfileSignupForm
