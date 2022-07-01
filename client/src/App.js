import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Navbar,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getNotes } from "./redux/noteSlice";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import logo from "./images/logo.png";

const App = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getNotes());
  }, [currentId, dispatch]);

  return (
    <Container className="bg-dark">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              height="60"
              className="d-inline-block align-center"
            />{" "}
            I Got So High
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Row>
        <Col sm={8}>
          <Notes setCurrentId={setCurrentId} />
        </Col>
        <Col sm={4} className="cola">
          <Button variant="primary" onClick={handleShow}>
            Launch
          </Button>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
