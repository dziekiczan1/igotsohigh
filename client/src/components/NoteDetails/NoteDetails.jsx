import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

import { getNote } from "../../redux/noteSlice";
import CommentSection from "./CommentSection";

const NoteDetails = () => {
  const { note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getNote(id));
  }, [id]);

  if (!note) return null;

  return (
    <Container style={{ paddingBottom: "1rem" }}>
      <Row className="m-2">
        <Col>
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
              <Card.Text className="text-white">{note.message}</Card.Text>
              <CommentSection note={note} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NoteDetails;
