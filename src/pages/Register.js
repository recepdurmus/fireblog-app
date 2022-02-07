import React from "react";
import { PersonAddAltOutlined } from "@mui/icons-material";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Avatar,
  Button,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "../helpers/firebase";
import googleIcon from "../assets/gfavicon.png";


const Schema = Yup.object().shape({
  username: Yup.string()
    .required("Display name is required")
    .min(2, "Too short")
    .max(15, "Must be 15 char or less"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!?.@#$%^&*()-+]+/, "Password must have a special char"),
  confirm: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (err) {alert(err.message)}
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      try {
        let user = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(user);
        await updateProfile(auth.currentUser, { displayName: values.username });
        console.log(auth.currentUser);
        navigate("/");
      } catch (error) {
        alert(error.message);
      }

    },
  });

  return (
    <Container
      sx={{
        marginTop: "2rem",
        height: "calc(85vh - 1rem)",
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        textAlign: "center",
        padding: "1rem",
      }}
      maxWidth="sm"
    >
      <Avatar
        sx={{
          margin: "1rem auto",
          bgcolor: "#4CAF50",
        }}
      >
        <PersonAddAltOutlined />
      </Avatar>

      <Typography sx={{ margin: "1rem" }} variant="h4">
        Register
      </Typography>
      <Formik>
        {() => (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="username"
                  label="User Name"
                  variant="outlined"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.username && formik.errors.username}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.email && formik.errors.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.password && formik.errors.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  name="confirm"
                  label="Confirm"
                  variant="outlined"
                  value={formik.values.confirm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.confirm && formik.errors.confirm}
                  error={
                    formik.touched.confirm && Boolean(formik.errors.confirm)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button sx={{backgroundColor:'#4CAF50'}} fullWidth item variant="contained" type="submit">
                  Register
                </Button>
                <Button
                  sx={{
                    marginTop:"0.5rem",
                    backgroundColor: "#fff",
                    marginBottom: "1rem",
                    color: "gray",
                    ":hover": {
                      bgcolor: "gray",
                      color: "white",
                    },
                  }}
                  fullWidth
                  item
                  variant="contained"
                  onClick={signInWithGoogle}
                >
                  <img
                    style={{ width: "1rem", marginRight: "1rem" }}
                    src={googleIcon}
                    alt="googleIcon"
                  />
                  Sign in with Google
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
