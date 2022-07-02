import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigationbar from "./components/Navigationbar/Navigationbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container className="bg-dark">
        <Navigationbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact component={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
