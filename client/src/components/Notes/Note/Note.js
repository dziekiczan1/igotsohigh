import React from "react";
import moment from "moment";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

import { deleteNote } from "../../../redux/noteSlice";
import "./styles.css";

const Note = ({ note, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="noteCard">
        <p>{moment(note.createdAt).fromNow()}</p>
        <p>{note.creator}</p>
        <p>{note.message}</p>
        <Button size="medium" onClick={() => setCurrentId(note._id)}>
          Details
        </Button>
        <Button
          size="medium"
          onClick={() => {
            dispatch(deleteNote(note._id));
          }}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default Note;
