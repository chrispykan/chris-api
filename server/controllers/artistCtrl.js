var db = require('../models');
var Artist = db.Artist;
var seedArtists = require('../seeds/artists');


module.exports = {

  // show all artists in the db
  index: function index(req,res) {
    Artist.find(function (err, allArtists) {
      err ? res.status(500).send("There was a problem finding the artists.") :
      res.json({ artists: allArtists });
    });
  },


  // create single artist
  create: function (req, res){
    var newArtist = req.body;
    Artist.create(newArtist, function(err, savedArtist){
      err ? res.status(500).send("There was a problem adding the artist information to the database.") :
      res.status(201).send(savedArtist);
    });
  },

// reset database and redirect to original seed artists
  nuke: function (req, res) {
    Artist.remove({}, function (err, removedArtists) {
      err ? res.status(500).send("There was an error.") :
        Artist.create(seedArtists, function (err, createdArtists) {
          err ? res.status(500).send("There was an error.") :
            res.redirect('/api/artists');
        });
      });
  },

  // show single artist
  show: function (req, res){
    var artistId = req.params.artistId;
    Artist.findById({_id: artistId}, function (err, artist) {
        err ? res.status(500).send("There was a problem finding the artist.") :
        !artist ? res.status(404).send( "The artist "+ artist.name +" was not found.") :
        res.status(200).send(artist);
      })
  },

  // delete a single artist
  destroy: function (req, res){
    var artistId = req.params.artistId;
    Artist.findByIdAndRemove({_id: artistId}, function (err, artist) {
        err ? res.status(500).send("There was a problem removing the artist.") :
        res.status(200).send("The artist "+ artist.name +" was deleted." );
      })
  },

  // update an artist
  update: function (req, res){
    var artistId = req.params.artistId;
    var updateArtist = req.body;
    Artist.findByIdAndUpdate({_id: artistId}, req.body, { new: true }, function (err, artist) {
      err ? res.status(500).send("There was a problem updating the artist.") :
      res.status(200).send(artist);
      })
    }

};