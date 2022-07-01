import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

import Note from "./Note/Note";

const Notes = ({ setCurrentId }) => {
  const notes = useSelector((state) => state.notes);

  return (
    <>
      {!notes.length ? (
        <div>There is nothing to show</div>
      ) : (
        notes.map((note, i) => {
          return (
            <Grid item xs={12} key={i}>
              <Note note={note} setCurrentId={setCurrentId} />
            </Grid>
          );
        })
      )}
    </>
  );
};

export default Notes;
