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
        <Card.Footer className="d-flex text-white">
          by&nbsp;<strong className="me-auto">{note.creator}</strong>
          <small>{moment(note.createdAt).fromNow()}</small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Note;
