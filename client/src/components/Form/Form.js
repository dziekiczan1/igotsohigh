import React, { useState, useEffect } from "react";
import { Button, TextField, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createNote, updateNote } from "../../redux/noteSlice";

import "./styles.css";

const Form = ({ currentId, setCurrentId }) => {
  const note = useSelector((state) =>
    currentId ? state.notes.find((note) => note._id === currentId) : null
  ); // if we have currentId we want to find a note with the same id as currentId
  const [noteData, setNoteData] = useState({
    creator: "",
    message: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (note) setNoteData(note);
  }, [note]); // when the note value changes we want to run this callback function inside useeffect

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateNote(currentId, noteData));
    } else {
      dispatch(createNote(noteData));
    }

    clear();
  };
  const clear = () => {
    setNoteData({
      creator: "",
      message: "",
    });
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        fullWidth
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          className="textfield"
          sx={{ input: { color: "white" } }}
          name="creator"
          label="Creator"
          fullWidth
          variant="outlined"
          value={noteData.creator}
          onChange={(e) =>
            setNoteData({ ...noteData, creator: e.target.value })
          }
        />
        <TextField
          className="textfield"
          sx={{ input: { color: "red" } }}
          name="message"
          label="Message"
          fullWidth
          variant="outlined"
          value={noteData.message}
          onChange={(e) =>
            setNoteData({ ...noteData, message: e.target.value })
          }
        />

        <Button size="large" type="submit" fullWidth>
          Submit
        </Button>
        <Button size="large" onClick={clear} fullWidth>
          Clear
        </Button>
      </Box>
    </div>
  );
};

export default Form;
