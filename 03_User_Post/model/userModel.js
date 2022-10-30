const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  mobile: {
    type: Number,
    required: true,
    minLength: 10,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    minLength: 3,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
