import React, { Suspense } from 'react';
import { Container, CircularProgress,Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import StepRoutes from './CheckoutRoutes';

import { Provider } from 'react-redux';
import { rootStore } from './root.store';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://succulent-frontend.vercel.app/">
        Whale Succulent Supply
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();

export default function Checkout() {
  return (
    <ThemeProvider theme={theme}>
      <Typography component="h1" variant="h1" align="center">
        &nbsp;
      </Typography>
      <Container maxWidth="lg">
        <Suspense fallback={<CircularProgress />}>
          <Provider store={rootStore}>
            <StepRoutes />
          </Provider>
        </Suspense>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}