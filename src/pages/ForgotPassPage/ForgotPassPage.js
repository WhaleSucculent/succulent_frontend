import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import {  REQUEST_RESET } from 'mutations/userMutations';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import Link from 'components/Link';

const theme = createTheme();

export const ForgotPassPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    name: ''
  });
  const [emailSent, setEmailSent] = useState(false);

  const [requestReset, { loading, data, error }] = useMutation(REQUEST_RESET, {
    variables: {
      email: formState.email,
    },
    onCompleted: ({ requestReset, data }) => {
      console.log(data)
      console.log(requestReset)
      setEmailSent(true);
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <QuestionMarkIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Lost your password?
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setFormState({
                ...formState,
                email: e.target.value
              })}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={requestReset}
            >
              Reset password
            </Button>
            <Grid container justifyContent={'center'} >
              <Grid item>
                <Link to={"/register"} variant="body1" style={{ color: "#3A85AB" }}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            {emailSent && (<Alert severity="success">Email is Sent! Please check your inbox.<Link to={"/"} style={{ color: "#3A85AB" }}>back to home</Link></Alert>)}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

