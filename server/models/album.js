// const mongoose = require('mongoose'); 
// const Schema = mongoose.Schema;


// const albumSchema = new mongoose.Schema({  
//   name: String,
//   artist: String,
//   releaseDate: String,
//   cover: String
// }); 

// mongoose.model('Album', albumSchema);
// module.exports = mongoose.model('Album');


var mongoose = require('mongoose');

module.exports =  mongoose.model('Album', new mongoose.Schema({
  name: String,
    artist: String,
    releaseDate: String,
    cover: String
}));
