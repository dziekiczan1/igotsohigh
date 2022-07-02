import { createSlice } from "@reduxjs/toolkit";
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
    dispatch(update(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await api.deleteNote(id);
    dispatch(remove(id));
  } catch (error) {
    console.log(error);
  }
};

export const noteSlice = createSlice({
  name: "notes",
  initialState: [],
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
    remove: (state, action) => {
      return state.filter((note) => note._id !== action.payload); // we keep all the notes except the one where ID is equal to action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchAllNotes, create, update, remove } = noteSlice.actions;
export default noteSlice.reducer;
