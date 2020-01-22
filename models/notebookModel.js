import mongoose, { Schema } from "mongoose";

const NotesSchema = new Schema({
  title: {
    type: String,
    required: "What is note's title ?"
  },
  text: {
    type: String,
    required: "What is the note?"
  },
  date: {
    type: Date,
    default: new Date()
  }
});

export default mongoose.model("Note", NotesSchema);
