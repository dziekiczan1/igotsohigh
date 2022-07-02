import React from "react";
import moment from "moment";
// import { Button } from "@mui/material";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { deleteNote } from "../../../redux/noteSlice";
import "./styles.css";

const Note = ({ note, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card bg="success" text="white" border="warning">
        <Card.Header className="d-flex">
          by <strong className="me-auto">{note.creator}</strong>
          <small>{moment(note.createdAt).fromNow()}</small>
        </Card.Header>
        <Card.Body>
          <Card.Title>I got so high that...</Card.Title>
          <Card.Text>{note.message}</Card.Text>
          <div className="klasa">
            <Button size="sm" onClick={() => setCurrentId(note._id)}>
              Details
            </Button>
            <Button
              size="sm"
              variant="dark"
              onClick={() => {
                dispatch(deleteNote(note._id));
              }}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: "140px" }}
      >
        <ToastContainer
          className="p-2"
          position="top-center"
          style={{ width: "100%" }}
        >
          <Toast style={{ width: "100%" }}>
            <Toast.Header closeButton={false}>
              by <strong className="me-auto">{note.creator}</strong>
              <small>{moment(note.createdAt).fromNow()}</small>
            </Toast.Header>
            <Toast.Body>{note.message}</Toast.Body>
            <Col className="klasa">
              <Button size="sm" onClick={() => setCurrentId(note._id)}>
                Details
              </Button>
              <Button
                size="sm"
                variant="dark"
                onClick={() => {
                  dispatch(deleteNote(note._id));
                }}
              >
                Delete
              </Button>
            </Col>
          </Toast>
        </ToastContainer>
      </div> */}

      {/* <div className="noteCard">
        <p></p>
        <p></p>
        <p></p>
        <Button size="medium">Details</Button>
        <Button size="medium">Delete</Button>
      </div> */}
    </>
  );
};

export default Note;
