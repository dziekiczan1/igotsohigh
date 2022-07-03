import mongoose from "mongoose";
import NoteMessage from "../models/noteMessage.js";

export const getNotes = async (req, res) => {
  try {
    const noteMessages = await NoteMessage.find();
    res.status(200).json(noteMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNote = async (req, res) => {
  const note = req.body;
  const newNote = new NoteMessage({
    ...note,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  const { id: _id } = req.params; // we get the id from params and we rename it to _id
  const note = req.body; // we get updated note here

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No notes with that id"); // we check if the _id is monggose object id

  const updatedNote = await NoteMessage.findByIdAndUpdate(
    _id,
    { ...note, _id },
    {
      new: true,
    }
  ); // we update data to NoteMessage by passing _id and note

  res.json(updatedNote);
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No notes with that id");

  await NoteMessage.findByIdAndRemove(id); // we update data to NoteMessage by passing _id and note

  res.json({ message: "Note removed" });
};
