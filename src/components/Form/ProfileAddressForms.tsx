import { Box, Button, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Form, Formik } from "formik";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { DeliveryFormValues } from "../../pages/CheckoutPage/components/delivery/delivery-form-values.interface";
import { deliveryFormSchema } from "../../pages/CheckoutPage/components/delivery/delivery-form.schema";
import {
  DeliveryFormProps
} from "../../pages/CheckoutPage/components/delivery/delivery.props";
import { useMeQuery } from "queries/utilQueries";
import { ProfileAddressForm } from "./profileaddress-form";

const DeliveryFormControl = styled(FormControl)(({ theme }) => ({
  display: "block",
  textAlign: "left",
  marginTop: theme.spacing(2),
}));



const ProfileAddressForms: FunctionComponent<DeliveryFormProps> = () => {
  const submitForm = (values: DeliveryFormValues) => {

  };
  const { t } = useTranslation();

  const {data, loading, error} = useMeQuery()
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error...</div>

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
              <ProfileAddressForm
                formName="shippingAddress"
                errors={errors.shippingAddress}
                touched={touched.shippingAddress}
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

export default ProfileAddressForms;
