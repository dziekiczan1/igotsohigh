// import libraries
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Typography, TextField, Button } from "@mui/material";
// import action
import { commentNote } from "../../redux/noteSlice";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CommentSection = ({ note }) => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState(note?.comments);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));
  const commentsRef = useRef();

  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment}`;
    const newComments = await dispatch(commentNote(finalComment, note._id));

    setComments(newComments);
    setComment("");

    commentsRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <ThemeProvider theme={Theme}>
      <div>
        <div>
          {user?.result?.name && (
            <div style={{ width: "80%" }}>
              <Typography
                gutterBottom
                variant="h6"
                className="text-warning"
                style={{ marginBottom: "1rem" }}
              >
                Write a Comment
              </Typography>
              <TextField
                fullWidth
                minRows={4}
                variant="outlined"
                label="Comment"
                multiline
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <Button
                style={{ marginTop: "1rem" }}
                fullWidth
                disabled={!comment}
                variant="contained"
                onClick={handleClick}
                color="success"
              >
                Comment
              </Button>
            </div>
          )}
          <div>
            <Typography
              gutterBottom
              variant="h6"
              className="text-warning"
              style={{ marginBottom: "1rem" }}
            >
              Comments
            </Typography>
            {comments.map((c, i) => (
              <Typography
                key={i}
                gutterBottom
                variant="subtitle2"
                style={{ color: "#fff" }}
              >
                <strong>{c}</strong>
                {/* <small>{c.split(":")[1]}</small> */}
              </Typography>
            ))}
            <div ref={commentsRef} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CommentSection;
