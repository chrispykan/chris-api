
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var uniqueValidator = require('mongoose-unique-validator');
// var crypto = require('crypto');
// var jwt = require('jsonwebtoken');


// var userSchema = new Schema({
//   username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
//   email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
//   password: String,
//   hash: String,
//   salt: String
// }, {timestamps: true});

// userSchema.methods.setPassword = function(password){
//   this.salt = crypto.randomBytes(16).toString('hex');
//   this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };

// userSchema.methods.validPassword = function(password){
//   var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//   return this.hash === hash;
// };



// module.exports = mongoose.model('User', userSchema);