import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const getNote = (id) => async (dispatch) => {
  const { data } = await api.fetchNote(id);
  dispatch(fetchNote(data));
};

export const getNotes = (page) => async (dispatch) => {
  const { data } = await api.fetchNotes(page); // data is destructed from response.data
  dispatch(fetchAllNotes(data));
};

export const commentNote = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.commentNote(value, id);
    dispatch(comment(data));
    return data.comments;
  } catch (error) {
    console.log(error);
  }
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
  initialState: {
    notes: [],
  },
  reducers: {
    fetchNote: (state, action) => {
      return { ...state, note: action.payload };
    },
    fetchAllNotes: (state, action) => {
      return {
        ...state,
        notes: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    },
    create: (state, action) => {
      return { ...state, notes: [...state.notes, action.payload] };
    },
    update: (state, action) => {
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
      }; // we check if current state id is equal to updated id (if it is we want to return updated payload (action.payload), otherwise we want to get current state)
    },
    remove: (state, action) => {
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      }; // we keep all the notes except the one where ID is equal to action.payload
    },
    comment: (state, action) => {
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note._id !== action.payload) {
            return action.payload;
          }
          return note;
        }),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchNote, fetchAllNotes, create, update, remove, comment } =
  noteSlice.actions;
export default noteSlice.reducer;
