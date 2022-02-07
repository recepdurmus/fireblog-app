import { LoginOutlined } from "@mui/icons-material";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Avatar,
  Button,
  Link,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import googleIcon from "../assets/gfavicon.png";
import { auth } from "../helpers/firebase";

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
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: async (values) => {
      try {
        let user = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(user);
        navigate("/");
      } catch (err) {
        alert(err.message);
      }
    },
  });

  return (
    <Container
      sx={{
        marginTop: "2rem",
        height: "calc(80vh - 1rem)",
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
        <LoginOutlined sx={{ backgroundColor: "#4CAF50" }} />
      </Avatar>

      <Typography sx={{ margin: "2rem" }} variant="h4">
        Login
      </Typography>
      <Formik>
        {({ values, handleSubmit, touched, errors, handleBlur }) => (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={5}>
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
                <Button
                  sx={{ backgroundColor: "#4CAF50", marginBottom: "1rem" }}
                  fullWidth
                  item
                  variant="contained"
                  type="submit"
                >
                  Login
                </Button>
                <Button
                  sx={{
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
      <p>
        Or
        <Link
          sx={{
            textDecoration: "none",
            fontWeight: "600",
            paddingLeft: "0.5rem",
            cursor: "pointer",
            color: "#24292E",
          }}
          onClick={() => navigate("/register")}
        >
          Register with email.
        </Link>
      </p>
    </Container>
  );
};

export default Login;
