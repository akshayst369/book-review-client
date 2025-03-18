const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  reviews: [String],
});

module.exports = mongoose.model("Book", bookSchema);
