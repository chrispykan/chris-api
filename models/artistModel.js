var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var artistSchema = new Schema({
  Name: String,
  Style: String,
  Medium: String,
  Country: String,
  Site: String 
});

module.exports = mongoose.model('Artist', artistSchema);
