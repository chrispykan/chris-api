var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookstoreSchema = new Schema({
  Name: String,
  Neighbourhood: String,
  Address: String,
  Directions: String
});

module.exports = mongoose.model('Bookstore', bookstoreSchema);