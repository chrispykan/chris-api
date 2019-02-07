
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// const Authentication = require('./controllers/authentication');
// const passportService = require('./services/passport');
// const passport = require('passport');
// const requireAuth = passport.authenticate('jwt', {session: false});
// const requireSignIn = passport.authenticate('local', {session: false});


// // require seed data
const seedAlbums = require('../seeds/albums'),
    seedArtists = require('../seeds/artists'),
    seedBookstores = require('../seeds/bookstores'),
    seedFilms = require('../seeds/films');








module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    res.send({message: 'S3CR3T M3SS4G3'});
  });
  app.post('/signup', Authentication.signup);
  app.post('/signin', requireSignIn, Authentication.signin);
}






