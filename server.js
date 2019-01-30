var express = require('express');
var app = express();
var db = require('./models/db');
var UserController = require('./controllers/userController')
var port = process.env.PORT || 3000;
var MONGODB_URI = process.env.MONGODB_URI;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});


app.use('/users', UserController);

require('dotenv').config();


module.exports = app;