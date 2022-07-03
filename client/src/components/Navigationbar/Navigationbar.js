import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import "./styles.scss";
import decode from "jwt-decode";
import { logOut } from "../../redux/authSlice";

const Navigationbar = () => {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();

  // const logout = () => {
  //   dispatch(logOut());

  //   setUser(null);
  // };

  // useEffect(() => {
  //   const token = user?.token;
  //   if (token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //   }
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, [location]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
    >
      <Container className="p-0">
        <Navbar.Brand>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="d-flex flex-row align-items-center"
          >
            <h1 className="navbarBrandName">I got so high that...</h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* {user ? (
          <>
            <Button color="warning" onClick={logout}>
              Logout {user.result.name}
            </Button>
          </>
        ) : null} */}
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
