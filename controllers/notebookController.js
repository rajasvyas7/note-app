import mongoose from "mongoose";
import Note from "../models/notebookModel";

exports.getNote = (req, res) => {
  Note.findById(req.params.noteId, (err, note) => {
    if (err) {
      res.send(err);
    }

    res.json(note);
  });
};

exports.getAllNotes = (req, res) => {
  Note.find({}, (err, notes) => {
    if (err) {
      res.send(err);
    }

    res.json(notes);
  });
};

exports.createNote = (req, res) => {
  const newNote = new Note(req.body);
  newNote.save((err, Note) => {
    if (err) {
      res.send(err);
    }

    res.json(Note);
  });
};

exports.updateNote = (req, res) => {
  console.log("body", req.body);
  console.log("params", req.params);
  console.log("query", req.query);
  Note.findOneAndUpdate(
    {
      _id: req.params.noteId
    },
    req.body,
    (err, note) => {
      if (err) {
        res.send(err);
      }

      res.json(note);
    }
  );
};

exports.deleteNote = (req, res) => {
  Note.remove(
    {
      _id: req.params.noteId
    },
    (err) => {
      if (err) {
        res.send(err);
      }

      res.json({
        message: `note ${req.params.noteId} successfully deleted`
      });
    }
  );
};
