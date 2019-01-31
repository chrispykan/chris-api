// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var albumSchema = new Schema({
//   name: String,
//   artist: String,
//   year: String,
//   cover: String
// });

// module.exports = mongoose.model('Album', albumSchema);



var mongoose = require('mongoose');  
var albumSchema = new mongoose.Schema({  
  name: String,
  artist: String,
  year: String,
  cover: String
});
mongoose.model('Album', albumSchema);
module.exports = mongoose.model('Album');