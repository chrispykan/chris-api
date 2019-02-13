const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// // require seed data
const seedAlbums = require('../seeds/albums'),
      seedArtists = require('../seeds/artists'),
      seedBookstores = require('../seeds/bookstores'),
      seedFilms = require('../seeds/films');


// USERS
router.route('/users')
    .get(ctrl.users.index)
    .post(ctrl.users.create);
 
  
  router.route('/users/:userId')
    .get(ctrl.users.show)
    .put(ctrl.users.update)
    .delete(ctrl.users.destroy);


// ALBUMS
  router.route('/albums')
    .get(ctrl.albums.index)
    .post(ctrl.albums.create);
  
  router.get('/albums/nuke', ctrl.albums.nuke);
  
  router.route('/albums/:albumId')
    .get(ctrl.albums.show)
    .put(ctrl.albums.update)
    .delete(ctrl.albums.destroy);

// ARTISTS
  router.route('/artists')
    .get(ctrl.artists.index)
    .post(ctrl.artists.create);
  
  router.get('/artists/nuke', ctrl.artists.nuke);
  
  router.route('/artists/:artistId')
    .get(ctrl.artists.show)
    .put(ctrl.artists.update)
    .delete(ctrl.artists.destroy);

// BOOKSTORES
  router.route('/bookstores')
    .get(ctrl.bookstores.index)
    .post(ctrl.bookstores.create);
  
  router.get('/bookstores/nuke', ctrl.bookstores.nuke);
  
  router.route('/bookstores/:bookstoreId')
    .get(ctrl.bookstores.show)
    .put(ctrl.bookstores.update)
    .delete(ctrl.bookstores.destroy);

  // FILMS
  router.route('/films')
    .get(ctrl.films.index)
    .post(ctrl.films.create);
  
  router.get('/films/nuke', ctrl.films.nuke);
  
  router.route('/films/:filmId')
    .get(ctrl.films.show)
    .put(ctrl.films.update)
    .delete(ctrl.films.destroy);
  

  module.exports = router;





