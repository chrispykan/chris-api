var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/test-api'
);


