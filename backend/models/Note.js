const mongoose = require('mongoose');
const { Schema } = mongoose;
// the structure of the note
const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, // setting up type
        ref: 'user' // setting up reference
    },
    title:{
        type: String, 
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('notes', NotesSchema);