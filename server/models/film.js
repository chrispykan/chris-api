const mongoose = require('mongoose');

module.exports =  mongoose.model('Film', new mongoose.Schema({
  name: String,
  genre: String,
  director: String,
  year: String 
}));