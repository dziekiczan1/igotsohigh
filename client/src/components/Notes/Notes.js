import React from "react";
import { useSelector } from "react-redux";

import Note from "./Note/Note";

const Notes = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <>
      {!notes.length ? (
        <div>There is nothing to show</div>
      ) : (
        notes.map((note) => {
          return (
            <div key={note._id}>
              <Note />
            </div>
          );
        })
      )}
    </>
  );
};

export default Notes;
