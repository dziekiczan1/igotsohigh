import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  message: String,
  creator: String,
  name: String,
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

const NoteMessage = mongoose.model("NoteMessage", noteSchema);

export default NoteMessage;
