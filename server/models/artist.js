
var mongoose = require('mongoose');

module.exports =  mongoose.model('Artist', new mongoose.Schema({
  name: String,
  style: String,
  medium: String,
  country: String,
  site: String 
}));
