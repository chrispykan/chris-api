var mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/chris-api-server'
);

module.exports.Album = require('./album');
module.exports.Artist = require('./artist');
module.exports.Bookstore = require('./bookstore');
module.exports.Film = require('./film');
module.exports.User = require('./user');