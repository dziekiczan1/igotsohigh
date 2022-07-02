import React, { useEffect, useState } from "react";
import { Col, Row, Button, Offcanvas, Container, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { getNotes } from "../../redux/noteSlice";
import Notes from "../Notes/Notes";
import Forma from "../Form/Form";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getNotes());
  }, [currentId, dispatch]);

  return (
    <Row>
      <Col sm={8}>
        <Notes setCurrentId={setCurrentId} />
      </Col>
      <Col sm={4}>
        <Container className="p-1">
          <Row className="m-2">
            <Col>
              <Card bg="dark" text="white" border="warning">
                <Card.Body className="sidebar">
                  <Button
                    variant="success"
                    size="lg"
                    onClick={handleShow}
                    className="button"
                  >
                    Launch
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          scroll={true}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {currentId ? "Editing" : "Creating"} a Note
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Forma currentId={currentId} setCurrentId={setCurrentId} />
          </Offcanvas.Body>
        </Offcanvas>
      </Col>
    </Row>
  );
};

export default Home;
