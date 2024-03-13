const mongoose = require('mongoose');//importing mongoose
const { Schema } = mongoose;//importing Schema from mongoose

const UserSchema = new Schema({//creating a schema for user
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;