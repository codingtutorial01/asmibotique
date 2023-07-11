const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  }
});

// Create a model based on the schema
module.exports = mongoose.model("users", userSchema);
