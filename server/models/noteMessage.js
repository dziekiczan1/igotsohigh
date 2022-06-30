import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  message: String,
  creator: String,
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

const NoteMessage = mongoose.model("NoteMessage", noteSchema);

export default NoteMessage;
