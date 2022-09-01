import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../../assets/signup.jpg';
import SignUpForm from './SignUpForm';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://karadiya.com" sx={{fontSize:10}}>
        Karadiya 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#0a1930' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{fontSize:20,paddingBottom:"20px"}}>
              Sign Up
            </Typography>
            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1,ml:12 }}>
              <TextField
                margin="normal"
                required
                
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                inputProps={{style: {fontSize: 13}}} 
                InputLabelProps={{style: {fontSize: 13}}}
                style ={{width: '85%'}}
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
                inputProps={{style: {fontSize: 13}}} 
                InputLabelProps={{style: {fontSize: 13}}}
                style ={{width: '85%'}}
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
                inputProps={{style: {fontSize: 13}}} 
                InputLabelProps={{style: {fontSize: 13}}}
                style ={{width: '85%'}}
              />
              <TextField
                margin="normal"
                required
                width= '150'
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{style: {fontSize: 13}}} 
                InputLabelProps={{style: {fontSize: 13}}}
                style ={{width: '85%'}}
              />
              <TextField
                margin="normal"
                required
                width= '150'
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{style: {fontSize: 13}}} 
                InputLabelProps={{style: {fontSize: 13}}}
                style ={{width: '85%'}}
              />
              
              <Button
                type="submit"
                
                size="large"
                variant="contained"
                sx={{ mt: 3, mb: 2 ,fontSize:15,bgcolor: '#0a1930',"&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                    color:'#0a1930',
                    
                  }}}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{fontSize:12}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" sx={{fontSize:12}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box> */}
            <SignUpForm/>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}