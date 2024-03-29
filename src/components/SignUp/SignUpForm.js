import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import React from 'react';
// material

import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Alert,
  AlertTitle,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// component
import Iconify from "../components/Iconify";
import AuthService from "../../services/auth.service";
import ActivityService from "../../services/activity.service";

// ----------------------------------------------------------------------

export default function RegisterForm({ officer }) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phone: Yup.string()
      .length(10, "Phone must be a valid number")
      .required("phone is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (data) => {
      if (officer) {
        AuthService.registerOfficer(
          data.firstName + " " + data.lastName,
          data.email,
          data.phone,
          data.password,
          ["user", "officer"]
        )
          .then(
            (user) => {
              ActivityService.createActivity(
                user.data.uid,
                "Created Account ID #" + user.data.uid
              );
              setTimeout(() => {
                navigate("/login", { replace: true });
              }, 5000);
              setOpen(true);
            },
            (error) => {
              const message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              setMessage(message);
              console.log(message);
            }
          )
          .catch((error) => {
            console.log(error);
          });
      } else {
        AuthService.registerUser(
          data.firstName + " " + data.lastName,
          data.email,
          data.phone,
          data.password,
          ["user", "owner"]
        )
          .then(
            () => {
              setTimeout(() => {
                navigate("/login", { replace: true });
              }, 5000);
              setOpen(true);
            },
            (error) => {
              const message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              setMessage(message);
              console.log(message);
            }
          )
          .catch((error) => {
            console.log(error);
          });
      }
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
           
              <TextField
                
                style = {{width: 500}}
                label="First name"
                {...getFieldProps("firstName")}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                inputProps={{style: {fontSize: 14}}} 
              InputLabelProps={{style: {fontSize: 15}}}
              />

              <TextField
                
                label="Last name"
                {...getFieldProps("lastName")}
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                inputProps={{style: {fontSize: 14}}} 
              InputLabelProps={{style: {fontSize: 15}}}
              style = {{width: 500}}
              />
            

            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              inputProps={{style: {fontSize: 14}}} 
              InputLabelProps={{style: {fontSize: 15}}}
              style = {{width: 500}}
            />

            <TextField
              fullWidth
              autoComplete="username"
              type="phone"
              label="Phone number"
              {...getFieldProps("phone")}
              error={Boolean(touched.phone && errors.phone)}
              helperText={touched.phone && errors.phone}
              inputProps={{style: {fontSize: 14}}} 
              InputLabelProps={{style: {fontSize: 15}}}
              style = {{width: 500}}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              style = {{width: 500}}
              type={showPassword ? "text" : "password"}
              label="Password"
              inputProps={{style: {fontSize: 14}}} 
              InputLabelProps={{style: {fontSize: 15}}}
              {...getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <Iconify
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"

              loading={isSubmitting}
              style = {{backgroundColor:'#0a1930'}}
              sx={{fontSize:"13px",bgcolor:"#0a1930",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
              color:'#0a1930'}}}
            >
              Register
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
      {officer && open && (
        <Alert severity="success" sx={{ width: "100%" }}>
          <AlertTitle>Officer Registration is Successful!</AlertTitle>
          An admin account has been created. Before login, Please notify user to
          check given email & click the link to activate the account.
        </Alert>
      )}
      {!officer && open && (
        <Alert severity="success" sx={{ width: "100%" }}>
          <AlertTitle>Registration is Successful!</AlertTitle>
          Thanks for creating Karadiya account. Before login, Please check your
          email & click the link to activate the account.
        </Alert>
      )}
      {message && (
        <Alert severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      )}
    </>
  );
}
