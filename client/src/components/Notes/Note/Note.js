import React from "react";
import moment from "moment";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { deleteNote } from "../../../redux/noteSlice";
import "./styles.css";

const Note = ({ note, setCurrentId, handleShow }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card bg="transparent" border="warning" className="card-noteCard">
        <Card.Header className="d-flex justify-content-between text-white">
          <small>
            by&nbsp;<strong className="me-auto">{note.creator}</strong>
          </small>
          <small>{moment(note.createdAt).fromNow()}</small>
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-success">
            I got so high that...
          </Card.Title>
          <Card.Text className="text-white">{note.message}</Card.Text>
          <div className="klasa">
            <Button
              size="sm"
              onClick={() => {
                handleShow();
                setCurrentId(note._id);
              }}
            >
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
    </>
  );
};

export default Note;
