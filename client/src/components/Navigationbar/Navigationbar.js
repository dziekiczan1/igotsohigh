import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

import "./styles.scss";
import logo from "../../images/logo.png";

const Navigationbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
    >
      <Container className="d-flex justify-content-center p-0">
        <Navbar.Brand className="d-flex flex-row align-items-center">
          <img
            src={logo}
            alt="logo"
            style={{ height: "60px", marginRight: "1rem" }}
          />
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="d-flex flex-row align-items-center"
          >
            <h1 className="navbarBrandName">I got so high that...</h1>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
