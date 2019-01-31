var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookstoreSchema = new Schema({
  name: String,
  neighbourhood: String,
  address: String,
  directions: String
});

module.exports = mongoose.model('Bookstore', bookstoreSchema);