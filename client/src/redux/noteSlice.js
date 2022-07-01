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
  const { data } = await api.fetchNotes(); // data is destructed from response.data
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

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, note);
    console.log(data);
    dispatch(update(data));
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
    update: (state, action) => {
      return state.map((note) =>
        note._id === action.payload._id ? action.payload : state
      ); // we check if current state id is equal to updated id (if it is we want to return updated payload (action.payload), otherwise we want to get current state)
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchAllNotes, create, update } = noteSlice.actions;
export default noteSlice.reducer;
