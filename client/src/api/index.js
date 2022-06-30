import axios from "axios";

const url = "http://localhost:5000/notes";

export const fetchNotes = () => axios.get(url);
export const createNote = (newNote) => axios.post(url, newNote);
// const API = axios.create({
//   baseURL: "http://localhost:5000",
// });

// export const fetchNotes = (id) => API.get(`/posts/${id}`);
