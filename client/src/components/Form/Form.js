import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/noteSlice";

import "./styles.css";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    message: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNote(postData));
    clear();
  };
  const clear = () => {
    setPostData({
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
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          className="textfield"
          sx={{ input: { color: "red" } }}
          name="message"
          label="Message"
          fullWidth
          variant="outlined"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
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
