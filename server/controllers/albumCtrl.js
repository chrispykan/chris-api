var db = require('../models');
var Album = db.Album;
var seedAlbums = require('../seeds/albums');


module.exports = {

  // show all albums in the db
  index: function index(req,res) {
    Album.find(function (err, allAlbums) {
      err ? res.status(500).send("There was a problem finding the albums.") :
      res.json({ albums: allAlbums });
    });
  },


  // create single album
  create: function (req, res){
    var newAlbum = req.body;
    Album.create(newAlbum, function(err, savedAlbum){
      err ? res.status(500).send("There was a problem adding the album information to the database.") :
      res.status(201).send(savedAlbum);
    });
  },


// reset database and redirect to original seed albums
  nuke: function (req, res) {
    Album.remove({}, function (err, removedAlbums) {
      err ? res.status(500).send("There was an error.") :
        Album.create(seedAlbums, function (err, createdAlbums) {
          err ? res.status(500).send("There was an error.") :
            res.redirect('/api/albums');
        });
      });
  },

  // show single album
  show: function (req, res){
    var albumId = req.params.albumId;
    Album.findById({_id: albumId}, function (err, album) {
        err ? res.status(500).send("There was a problem finding the album.") :
        !album ? res.status(404).send("The Album " + album.name + " was not found.") :
        res.status(200).send(album);
      })
  },

  // delete a single album
  destroy: function (req, res){
    var albumId = req.params.albumId;
    Album.findByIdAndRemove({_id: albumId}, function (err, album) {
        err ? res.status(500).send("There was a problem removing the album.") :
        res.status(200).send("The album "+ album.name +" was deleted." );
      })
  },

  // update an album
  update: function (req, res){
    var albumId = req.params.albumId;
    var updateAlbum = req.body;
    Album.findByIdAndUpdate({_id: albumId}, req.body, { new: true }, function (err, album) {
      err ? res.status(500).send("There was a problem updating the album.") :
      res.status(200).send(album);
      })
    }

};