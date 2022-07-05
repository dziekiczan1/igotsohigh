import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";

import Note from "./Note/Note";

const Notes = ({ setCurrentId, handleShow }) => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <>
      {!notes?.length ? (
        <div>There is nothing to show</div>
      ) : (
        notes.map((note, i) => {
          return (
            <Container key={i} className="p-1">
              <Row className="m-2">
                <Col>
                  <Note
                    note={note}
                    setCurrentId={setCurrentId}
                    handleShow={handleShow}
                  />
                </Col>
              </Row>
            </Container>
          );
        })
      )}
    </>
  );
};

export default Notes;
