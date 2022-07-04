import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navigationbar from "./components/Navigationbar/Navigationbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import NoteDetails from "./components/NoteDetails/NoteDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Container className="bg-dark">
        <Navigationbar />
        <Routes>
          <Route path="/notes" element={<Home />} />
          <Route path="/" element={<Navigate to="/notes" />} />
          <Route path="/notes/search" element={<Home />} />
          <Route path="/notes/:id" element={<NoteDetails />} />
          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/notes" />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
