import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem(`profile`)).token
    }`;
  }

  return req;
});

export const fetchNote = (id) => API.get(`notes/${id}`);
export const fetchNotes = (page) => API.get(`/notes?page=${page}`);
export const createNote = (newNote) => API.post("/notes", newNote);
export const commentNote = (value, id) =>
  API.post(`notes/${id}/commentNote`, { value });
export const updateNote = (id, updatedNote) =>
  API.patch(`notes/${id}`, updatedNote);
export const deleteNote = (id) => API.delete(`notes/${id}`);

export const signIn = (formData) => API.post(`user/signin`, formData);
export const signUp = (formData) => API.post(`user/signup`, formData);
