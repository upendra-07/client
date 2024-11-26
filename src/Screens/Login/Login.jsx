import React, { useState } from "react";
import {
  Card,
  Grid,
  Typography,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../Components/InputFields/InputFields";
import GetStartedButton from "../../Components/Buttons/GetStartedButton";
import chat from "../../Assets/21794482.jpg";
import useLogin from "./useLogin";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const { userSignIn } = useLogin();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const validate = () => {
    let temp = {};
    temp.email = values.email ? "" : "This field is required.";
    temp.password = values.password ? "" : "This field is required.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const variables = {
        input: { email: values.email, password: values.password },
      };
      userSignIn({ variables });
    }
  };

  const btnStyle = {
    width: "100%", // Make the button responsive
    maxWidth: "190px",
    height: "45px",
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Image Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: "none", md: "block" },
          backgroundImage: `url(${chat})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Login Form Section */}
      <Grid
        item
        xs={12}
        md={6}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ width: "100%", maxWidth: 400, p: 3 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
            className="app-title"
          >
            AU ChatBox
          </Typography>

          {isSignUp ? (
            <Card elevation={4} sx={{ borderRadius: 4, p: 3 }}>
              <Typography
                variant="subtitle1"
                align="center"
                gutterBottom
                className="login-title"
              >
                Sign Up
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputField
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                    error={errors.email}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="userName"
                    label="User Name"
                    value={values.userName}
                    onChange={handleInputChange}
                    error={errors.email}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleInputChange}
                    error={errors.password}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <GetStartedButton
                    label={"Sign Up"}
                    style={btnStyle}
                    onClick={handleSubmit}
                  />
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography variant="body2">
                    {"Already have an account? "}
                    <span
                      style={{
                        textDecoration: "none",
                        color: "#3f51b5",
                        cursor: "pointer",
                      }}
                      onClick={() => setIsSignUp((prevState) => !prevState)}
                    >
                      {"Log In"}
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          ) : (
            <Card elevation={4} sx={{ borderRadius: 4, p: 3 }}>
              <Typography
                variant="subtitle1"
                align="center"
                gutterBottom
                className="login-title"
              >
                Log In
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputField
                    name="email"
                    label="Email or User Name"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleInputChange}
                    error={errors.password}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <GetStartedButton
                    label={"Log In"}
                    style={btnStyle}
                    onClick={handleSubmit}
                  />
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography variant="body2">
                    {"Don't have an account? "}
                    <span
                      style={{
                        textDecoration: "none",
                        color: "#3f51b5",
                        cursor: "pointer",
                      }}
                      onClick={() => setIsSignUp((prevState) => !prevState)}
                    >
                      {"Sign Up"}
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
