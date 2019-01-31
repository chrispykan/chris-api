var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmSchema = new Schema({
  name: String,
  genre: String,
  director: String,
  year: String 
});

module.exports = mongoose.model('Film', filmSchema);