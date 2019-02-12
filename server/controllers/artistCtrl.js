var db = require('../models');
var Artist = db.Artist;
var util = require('./utils');
var seedArtists = require('../seeds/artists');

module.exports = {
  index: function index(req,res) {
    Artist.find(function (err, allArtists) {
      err ? res.status(500).json({ error: err.message }) :
        res.json({ artists: allArtists });
    });
  },

  create: function (req,res) {
      var newArtist = req.body;
      Artist.create(newArtist, function (err, savedArtist) {
        err ? res.status(500).json({ error: err.message }) :
          res.status(201).json(savedArtist);
      });
  },

  nuke: function (req, res) {
    Artist.remove({}, function (err, removedArtists) {
      err ? res.status(500).json({ error: err.message }) :
        Artist.create(seedArtists, function (err, createdAbums) {
          err ? res.status(500).json({ error: err.message }) :
            res.redirect('/api/artists');
        });
      });
  },

  show: function (req,res) {
    var artistId = req.params.artistId;
    Artist.findOne({ _id: artistId }, util.getSingularResponse.bind(res));
  },

  destroy: function (req, res){
    var artistId = req.params.artistId;
    Artist.findOneAndRemove({ _id: artistId }, util.getSingularResponse.bind(res));
  } ,

  update: function (req,res) {
    var artistId = req.params.artistId;
    var updateArtist = req.body;
    Artist.findOneAndUpdate({ _id: artistId }, req.body, { new: true }, util.getSingularResponse.bind(res));
  }

};
