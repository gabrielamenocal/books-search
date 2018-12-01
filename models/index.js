const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String},
  author: { type: String},
  description: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("book", bookSchema);

module.exports = {book:Book};
