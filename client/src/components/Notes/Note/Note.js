import React from "react";
import moment from "moment";
import { Button } from "@mui/material";

import "./styles.css";

const Note = ({ note, setCurrentId }) => {
  return (
    <>
      <div className="noteCard">
        <p>{moment(note.createdAt).fromNow()}</p>
        <p>{note.creator}</p>
        <p>{note.message}</p>
        <Button size="medium" onClick={() => setCurrentId(note._id)}>
          Details
        </Button>
        <Button size="medium" onClick={() => {}}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default Note;
