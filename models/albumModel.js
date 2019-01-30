var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new Schema({
  Name: String,
  Artist: String,
  Year: String,
  Cover: String
});

module.exports = mongoose.model('Album', albumSchema);