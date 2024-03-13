const mongoose = require('mongoose');//importing mongoose
const { Schema } = mongoose;//importing Schema from mongoose

const NotesSchema = new Schema({//creating a schema for notes
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user' 
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