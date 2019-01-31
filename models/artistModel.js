var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var artistSchema = new Schema({
  name: String,
  style: String,
  medium: String,
  country: String,
  site: String 
});

module.exports = mongoose.model('Artist', artistSchema);
