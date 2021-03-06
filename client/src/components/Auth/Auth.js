import React, { useState } from "react";
import { Button, Grid, Typography, Container, Paper } from "@mui/material";
import { Card, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./styles.scss";
import Input from "./Input";
import { signin, signup } from "../../redux/authSlice";

const Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const initialState = {
  nickName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignUp((prevSignUp) => !prevSignUp);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // [e.target.name] is our nick, email ,password
  };

  return (
    <Container className="p-3">
      <Row>
        <Col>
          <Card
            bg="success"
            text="light"
            border="warning"
            className="card-noteCard m-2"
          >
            <Card.Header className="d-flex align-items-center">
              <Typography variant="h5">
                {isSignup ? "Sign Up" : "Sign In"}
              </Typography>
            </Card.Header>
            <Card.Body style={{ padding: "0" }}>
              <ThemeProvider theme={Theme}>
                <Paper style={{ padding: "1rem" }}>
                  <form onSubmit={handleSubmit}>
                    {isSignup && (
                      <>
                        <Input
                          name="nickName"
                          label="Nickname"
                          handleChange={handleChange}
                          autoFocus
                        />
                      </>
                    )}
                    <Input
                      name="email"
                      label="Email Address"
                      handleChange={handleChange}
                      type="email"
                    />
                    <Input
                      name="password"
                      label="Password"
                      handleChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      handleShowPassword={handleShowPassword}
                    />
                    {isSignup && (
                      <Input
                        name="confirmPassword"
                        label="Repeat Password"
                        handleChange={handleChange}
                        type="password"
                      />
                    )}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="success"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {isSignup ? "Sign Up" : "Sign In"}
                    </Button>

                    <Grid container justifyContent="flex-end">
                      <Button onClick={switchMode} style={{ color: "#ffffff" }}>
                        {isSignup
                          ? "Already have an account? Sign In"
                          : "Don't have an account? Sign up"}
                      </Button>
                    </Grid>
                  </form>
                </Paper>
              </ThemeProvider>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
