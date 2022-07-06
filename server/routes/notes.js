import express from "express";
import {
  getNote,
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  commentNote,
} from "../controllers/notes.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", getNote);
router.get("/", getNotes);
router.post("/", auth, createNote);
router.post("/:id/commentNote", auth, commentNote);
router.patch("/:id", auth, updateNote);
router.delete("/:id", auth, deleteNote);

export default router;
