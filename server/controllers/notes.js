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
  const newNote = new NoteMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
