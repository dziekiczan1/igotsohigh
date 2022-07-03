import React, { useEffect, useState } from "react";
import { Col, Row, Button, Offcanvas, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getNotes } from "../../redux/noteSlice";
import Notes from "../Notes/Notes";
import Forma from "../Form/Form";
import Auth from "../Auth/Auth";
import Profile from "../Profile/Profile";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState();
  const [show, setShow] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    dispatch(getNotes());
  }, [currentId, dispatch]);

  return (
    <Row className="p-0">
      <Col sm={8} className="p-1">
        <Notes setCurrentId={setCurrentId} handleShow={handleShow} />
      </Col>
      <Col sm={4} className="p-1">
        <Col>
          <Card bg="dark" text="white" border="none">
            <Card.Body className="m-2 py-0 sidebar">
              <Button
                variant="outline-success"
                size="lg"
                onClick={handleShow}
                className="button"
              >
                Share a weed story!
              </Button>
            </Card.Body>
            {user ? <Profile /> : <Auth />}
          </Card>
        </Col>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          scroll={true}
          className="bg-dark"
        >
          <Offcanvas.Header closeButton className="bg-success">
            <Offcanvas.Title className="text-white">
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
