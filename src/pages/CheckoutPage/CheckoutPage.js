import React, { Suspense } from "react";
import { Container, CircularProgress, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StepRoutes from "./routes/CheckoutRoutes";
import { Provider } from "react-redux";
import { rootStore } from "../../store/root.store";
import Title from "pages/AdminHomePage/components/Title";

export default function Checkout() {
  return (
    <>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <Title>Checkout</Title>
      </Box>
      {/* <Container maxWidth="lg"> */}
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Suspense fallback={<CircularProgress />}>
          <Provider store={rootStore}>
            <StepRoutes />
          </Provider>
        </Suspense>
      </Container>
    </>
  );
}
