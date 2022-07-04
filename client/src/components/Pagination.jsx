import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getNotes } from "../redux/noteSlice";

const Paginate = ({ page }) => {
  const dispatch = useDispatch();
  const { numberOfPages } = useSelector((state) => state.notes);

  useEffect(() => {
    if (page) dispatch(getNotes(page));
  }, [page]);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Pagination
        count={numberOfPages}
        page={Number(page) || 1}
        color="secondary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            component={Link}
            to={`/notes?page=${item.page}`}
          />
        )}
      />
    </div>
  );
};

export default Paginate;
