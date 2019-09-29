const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema
const BookSchema = new Schema({
 name: {
   type: String,
   required: true
 },
  author: {
   type: String,
   required: true
  },
 description: {
  type: String,
  required: true
 },
 image: {
   type: String,
   required: false
 }
//  link: {
//   type: String,
//   required: false
//  }
});
module.exports = book = mongoose.model('book', BookSchema);