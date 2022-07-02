import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./styles.scss";
import { createNote, updateNote } from "../../redux/noteSlice";

const Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Forma = ({ currentId, setCurrentId }) => {
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
    setCurrentId(null);
    setNoteData({
      creator: "",
      message: "",
    });
  };
  return (
    <ThemeProvider theme={Theme}>
      <Box
        component="form"
        noValidate
        fullWidth
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          className="textfield"
          sx={{ margin: "1rem 0" }}
          name="creator"
          label="Creator"
          fullWidth
          variant="outlined"
          multiline
          value={noteData.creator}
          onChange={(e) =>
            setNoteData({ ...noteData, creator: e.target.value })
          }
        />
        <TextField
          className="textfield"
          name="message"
          label="Message"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
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
    </ThemeProvider>
  );
};

export default Forma;
