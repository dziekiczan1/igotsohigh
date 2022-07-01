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
        notes.map((note) => {
          return (
            <Grid item xs={12}>
              <Note note={note} setCurrentId={setCurrentId} />
            </Grid>
          );
        })
      )}
    </>
  );
};

export default Notes;
