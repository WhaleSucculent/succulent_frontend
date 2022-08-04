import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import { LOGIN_CUSTOMER, LOGIN_WITH_GOOGLE } from 'mutations/userMutations';
import { useEffect, useState } from 'react';
import { AUTH_TOKEN } from './constants';
import { useNavigate } from 'react-router-dom';
import Link from 'components/Link';
import { useMeQuery } from 'queries/utilQueries';
import { CircularProgress } from '@mui/material';
import { Google } from '@mui/icons-material';


const theme = createTheme();

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    name: ''
  });

  const [idToken, setIdToken] = useState('');

  const handleGoogleLogin = (res) => {
    console.log(res)
    setIdToken(res.credential);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleGoogleLogin
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: "outline", size: "large" }
    )

  }, [])


  const [login, { loading, data, error }] = useMutation(LOGIN_CUSTOMER, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ loginCustomer, data }) => {
      console.log(loginCustomer)
      localStorage.setItem(AUTH_TOKEN, loginCustomer.token);
      console.log("login")
      navigate('/');
      window.location.reload();
    }
  })

  const [loginWithGoogle, {loading: googleLoading, data: googleData, error: googleError}] = useMutation(LOGIN_WITH_GOOGLE, {
    variables: {
      idToken: setIdToken
    },
    onCompleted: ({ loginWithGoogle, data }) => {
      console.log(loginWithGoogle)
      localStorage.setItem(AUTH_TOKEN, loginWithGoogle.token);
      console.log("login")
      navigate('/');
      window.location.reload();
    }
  })


  const { data: meData, loading: meLoading, error: meError } = useMeQuery();

  if (loading || meLoading) return <Box sx={{ display: 'flex', alignItems: 'center' }}><CircularProgress /></Box>
  if (error || meError) return <div>Error!</div>




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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setFormState({
                ...formState,
                password: e.target.value
              })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={login}
            >
              Sign In
            </Button>
            <div id='signInDiv' ></div>
            <Button onClick={loginWithGoogle}>google</Button>
            {console.log(idToken)}
            <Grid container>
              <Grid item xs>
                <Link to={"/forgot"} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/register"} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}