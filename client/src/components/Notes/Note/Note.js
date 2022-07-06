import React from "react";
import moment from "moment";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { ButtonBase } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { deleteNote } from "../../../redux/noteSlice";
import "./styles.css";

const Note = ({ note, setCurrentId, handleShow }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  const openNote = () => {
    navigate(`/notes/${note._id}`);
  };

  return (
    <>
      <Card bg="transparent" border="warning" className="card-noteCard">
        <Card.Header className="d-flex justify-content-between text-white">
          <h5 className="d-none d-sm-block text-warning">
            I got so high that...
          </h5>
          <small>
            by&nbsp;<strong className="me-auto">{note.name}</strong>&nbsp;
            {moment(note.createdAt).fromNow()}
          </small>
        </Card.Header>

        <Card.Body>
          <ButtonBase onClick={openNote}>
            <Card.Text className="text-white">{note.message}</Card.Text>
          </ButtonBase>
          <div className="note-footer">
            <div className="footer-comments" onClick={openNote}>
              <small className="text-warning">Comments: 12</small>
            </div>
            {user?.result?._id === note?.creator ? (
              <div className="footer-icons">
                {" "}
                <EditOutlinedIcon
                  sx={{
                    color: "rgba(255, 191, 41)",
                    marginRight: "1rem",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                  }}
                  fontSize="medium"
                  onClick={() => {
                    handleShow();
                    setCurrentId(note._id);
                  }}
                />
                <DeleteIcon
                  sx={{
                    color: "rgba(255, 191, 41)",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                  }}
                  fontSize="medium"
                  onClick={() => {
                    dispatch(deleteNote(note._id));
                  }}
                />
              </div>
            ) : null}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Note;
