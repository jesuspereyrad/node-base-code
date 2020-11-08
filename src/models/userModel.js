const mongoose = require("mongoose");

// EXAMPLE TEST User schema
const Schema = mongoose.Schema;


// EXAMPLE Attributes of the data object.
const userSchema = new Schema({
  name: String,
  lastName: String,
  id: Boolean,
  role: Date
});

// EXAMPLE Compile model from schema with mongoDB
module.exports = mongoose.model('user', userSchema );