const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  listName: { type: String, required: true },
  listItems:[],
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("List", listSchema);

module.exports = List;
