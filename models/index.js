var mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/test-api'
);


var AlbumModel = require('./albumModel');
var ArtistModel = require('./artistModel');
var BookstoreModel = require('./bookstoreModel');
var FilmModel = require('./filmModel');
// var UserModel = require('./userModel');

module.exports = {
  Album: AlbumModel,
  Artist: ArtistModel,
  Bookstore: BookstoreModel,
  Film: FilmModel
  // User: UserModel
};