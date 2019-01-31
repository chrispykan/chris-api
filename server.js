var express = require('express');
var app = express();
// var db = require('./models/db');
var db = require('./models/index');

var port = process.env.PORT || 3000;
var MONGODB_URI = process.env.MONGODB_URI;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});


// var UserController = require('./controllers/userCtrl')
var AlbumController = require('./controllers/albumCtrl')
// app.use('/users', UserController);
app.use('/albums', AlbumController);


require('dotenv').config();


module.exports = app;