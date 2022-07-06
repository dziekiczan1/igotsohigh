import mongoose from "mongoose";
import NoteMessage from "../models/noteMessage.js";

export const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await NoteMessage.findById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNotes = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 10;
    // (Number(page)) - we have to convert page for number, because it comes on backend as a string
    const startIndex = (Number(page) - 1) * LIMIT; // get start ubdex if every page
    const total = await NoteMessage.countDocuments({});

    const notes = await NoteMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: notes,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
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

export const commentNote = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const note = await NoteMessage.findById(id);

  note.comments.push(value);

  const updatedNote = await NoteMessage.findByIdAndUpdate(id, note, {
    new: true,
  });

  res.json(updatedNote);
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
