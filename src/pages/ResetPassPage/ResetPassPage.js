import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import { REQUEST_RESET, RESET_PASSWORD } from 'mutations/userMutations';
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import { useLocation, useNavigate } from 'react-router-dom';
import Link from 'components/Link';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { PasswordRounded, Visibility, VisibilityOff } from '@mui/icons-material';

import { useDebounce, useTimeoutWhen } from 'rooks'

const theme = createTheme();

export const ResetPassPage = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordReset, setPasswordReset] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(true)

  const [requestReset, { data }] = useMutation(RESET_PASSWORD, {
    variables: {
      token: location?.pathname.slice(7),
      password: newPassword,
    },
    onCompleted: (data) => {
      setPasswordReset(true);
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    }
  })

  useEffect(() => {
    if (newPassword === confirmPassword) {
      setIsSamePassword(true)
    } else {
      setIsSamePassword(false)
    }
  }, [newPassword, confirmPassword])



  const validateNewPasswordHandler = useDebounce((e) => {
    setNewPassword(e.target.value)
  }, 2000)

  const validateConfirmPasswordHandler = useDebounce((e) => {
    setConfirmPassword(e.target.value)
  }, 2000)



  const [values, setValues] = useState({
    showNewPassword: false,
    showConfirmPassword: false,
  });


  const handleClickShowNewPassword = () => {
    setValues({
      ...values,
      showNewPassword: !values.showNewPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            <RestartAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset your password!
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type={values.showNewPassword ? 'text' : 'password'}
              id="password"
              label="New Password"
              name="password"
              autoComplete="password"
              autoFocus
              error={!isSamePassword}
              onChange={validateNewPasswordHandler}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type={values.showConfirmPassword ? 'text' : 'password'}
              id="comfirmPassword"
              label="Comfirm New Password"
              name="comfirmPassword"
              autoComplete="comfirmPassword"
              error={!isSamePassword}
              onChange={validateConfirmPasswordHandler}
              helperText={!isSamePassword && "Please input same password!"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
                <Link to={"/register"} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {passwordReset && (<Alert severity="success">Password Changed! Will go back to login in page in 5 seconds</Alert>)}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

