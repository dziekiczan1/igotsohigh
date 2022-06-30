import React from "react";
import moment from "moment";
import { Button } from "@mui/material";

import "./styles.css";

const Note = ({ note }) => {
  return (
    <>
      <div className="noteCard">
        <p>{moment(note.createdAt).fromNow()}</p>
        <p>{note.creator}</p>
        <p>{note.message}</p>
        <Button size="large" onClick={() => {}} fullWidth>
          Delete
        </Button>
      </div>
    </>
  );
};

export default Note;
