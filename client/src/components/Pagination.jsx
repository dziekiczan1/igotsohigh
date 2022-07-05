import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { getNotes } from "../redux/noteSlice";

const Paginate = ({ page }) => {
  const dispatch = useDispatch();
  const { numberOfPages } = useSelector((state) => state.notes);
  const Theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  useEffect(() => {
    if (page) dispatch(getNotes(page));
  }, [page]);

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={Theme}>
        <Pagination
          count={numberOfPages}
          page={Number(page) || 1}
          color="standard"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              component={Link}
              style={{
                backgroundColor: "rgba(15, 235, 99, 0.45)",
              }}
              to={`/notes?page=${item.page}`}
            />
          )}
        />
      </ThemeProvider>
    </div>
  );
};

export default Paginate;
