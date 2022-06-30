import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

// const fetchTheNotes = createAsyncThunk(
//   "users/fetchNotes",
//   async (thunkAPI) => {
//     const response = await userAPI.fetchNotes(userId);
//     return response.data;
//   }
// );

export const getNotes = () => async (dispatch) => {
  const { data } = await api.fetchNotes();
  dispatch(fetchAllNotes(data));
};

export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);

    dispatch(create(data));
  } catch (error) {
    console.log(error);
  }
};

export const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  // extraReducers: (builder) => {
  //   builder.addCase(fetchPosts.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchPosts.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.postcontent = action.payload;
  //     state.error = "";
  //   });
  //   builder.addCase(fetchPosts.rejected, (state, action) => {
  //     state.loading = false;
  //     state.postcontent = [];
  //     state.error = action.error.message;
  //   });
  // },
  reducers: {
    fetchAllNotes: (state, action) => {
      return action.payload;
    },
    create: (state, action) => {
      return [...state, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchAllNotes, create } = noteSlice.actions;
export default noteSlice.reducer;
