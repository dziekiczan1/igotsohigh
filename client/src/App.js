import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { getNotes } from "./redux/noteSlice";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import logo from "./images/logo.png";
import "./styles.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="lg">
        <AppBar position="static" className="appBar">
          <Typography variant="h2" className="heading">
            I got so high
          </Typography>
          <img src={logo} alt="logo" height="60" className="image" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Notes />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
};

export default App;
