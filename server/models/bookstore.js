var mongoose = require('mongoose');

module.exports =  mongoose.model('Bookstore', new mongoose.Schema({
  name: String,
  neighbourhood: String,
  address: String,
  directions: String
}));