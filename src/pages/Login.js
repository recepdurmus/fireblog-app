// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../helpers/firebase';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// const Login = () => {
//   const navigate = useNavigate()
//   const [email, setemail] = useState()
//   const [password, setpassword] = useState()

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const data = new FormData(event.currentTarget);
//   //   // eslint-disable-next-line no-console
//   //   console.log({
//   //     email: data.get('email'),
//   //     password: data.get('password'),
//   //   });
//   // };

//   const handleSubmit = async (event) => {
//     try{
//         event.preventDefault()
//         let user = await signInWithEmailAndPassword(auth, email, password)
//         console.log(user);
//         navigate('/')
//     }catch(err){
//       alert(err.message)
//     }
//   }



//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               onChange={(e) => setemail(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               onChange={(e) => setpassword(e.target.value)}

//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={handleSubmit}
//             >
//               Sign In
//             </Button>
//             <Grid container justifyContent="center">
//               <Grid   item>
//                 <Link  href='/register' variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default Login

import React from 'react'
import { LoginOutlined } from '@mui/icons-material'
import { Container, Grid, Typography, TextField, Avatar, Button, Link} from '@mui/material'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../helpers/firebase'

const Schema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required("No password provided")
      .min(8, "Password is too short - should be 8 chars minimum")
      .matches(/\d+/, "Password must have a number")
      .matches(/[a-z]+/, "Password must have a lowercase")
      .matches(/[A-Z]+/, "Password must have a uppercase")
      .matches(/[!?.@#$%^&*()-+]+/, "Password must have a special char"),
  });



const Login = () => {
    const navigate = useNavigate()
    // const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues : {
            email: "",
            password: ""
        },
        validationSchema: Schema,
        onSubmit: async (values) => {
            // setLoading(true)
            try {
                let user = await signInWithEmailAndPassword(auth, values.email, values.password)
                console.log(user)
                navigate('/')
            } catch (err) {
                alert(err.message)
            }
            // setLoading(false)
        }
    })



    return (
        <Container
            sx={{
                marginTop: '2rem',
                height: 'calc(80vh - 1rem)',
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                textAlign:'center',
                padding:'1rem'
            }}
            maxWidth='sm'
        >
            <Avatar
                sx={{
                    margin: '1rem auto',
                    bgcolor: 'primary.main',
                    }}
            >
                <LoginOutlined />
            </Avatar>

            <Typography sx={{ margin: '2rem'}} variant='h4'>
                Login
            </Typography>
            <Formik>{({
                values,
                handleSubmit,
                touched, 
                errors,
                handleBlur

            }) => (
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth 
                                name='email' 
                                label="Email" 
                                variant="outlined"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.email && formik.errors.email}
                                error={formik.touched.email && Boolean(formik.errors.email)} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                type='password' 
                                name='password' 
                                label="Password" 
                                variant="outlined"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.password && formik.errors.password}
                                error={formik.touched.password && Boolean(formik.errors.password)} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                fullWidth 
                                item 
                                variant="contained"
                                type='submit'
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>)}
            </Formik>
            <p>
                Already have an account?
                <Link
                    sx={{
                        textDecoration: 'none',
                        fontWeight: '600',
                        paddingLeft: '0.5rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => navigate('/register')}
                >
                Register.
                </Link>
            </p>
        </Container>
    )
}

export default Login
