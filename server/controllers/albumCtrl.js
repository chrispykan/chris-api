var db = require('../models');
var Album = db.Album;
var util = require('./utils');
var seedAlbums = require('../seeds/albums');

module.exports = {
  index: function index(req,res) {
    Album.find(function (err, allAlbums) {
      err ? res.status(500).json({ error: err.message }) :
        res.json({ albums: allAlbums });
    });
  },

  create: function (req,res) {
      var newAlbum = req.body;
      Album.create(newAlbum, function (err, savedAlbum) {
        err ? res.status(500).json({ error: err.message }) :
          res.status(201).json(savedAlbum);
      });
  },

  nuke: function (req, res) {
    Album.remove({}, function (err, removedAlbums) {
      err ? res.status(500).json({ error: err.message }) :
        Album.create(seedAlbums, function (err, createdAbums) {
          err ? res.status(500).json({ error: err.message }) :
            res.redirect('/api/albums');
        });
      });
  },

  show: function (req,res) {
    var albumId = req.params.albumId;
    Album.findOne({ _id: albumId }, util.getSingularResponse.bind(res));
  },

  destroy: function (req, res){
    var albumId = req.params.albumId;
    Album.findOneAndRemove({ _id: albumId }, util.getSingularResponse.bind(res));
  } ,

  update: function (req,res) {
    var albumId = req.params.albumId;
    var updateAlbum = req.body;
    Album.findOneAndUpdate({ _id: albumId }, req.body, { new: true }, util.getSingularResponse.bind(res));
  }
};

