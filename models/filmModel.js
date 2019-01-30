var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmSchema = new Schema({
  Name: String,
  Genre: String,
  Director: String,
  Year: String 
});

module.exports = mongoose.model('Film', filmSchema);