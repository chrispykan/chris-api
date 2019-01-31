var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());


// import album model
var Album = require ('../models/albumModel.js');


// ALBUM CRUD

// Creates a new album
router.post('/', function (req, res) {
  Album.create({
    name : req.body.name,
    artist : req.body.artist,
    year : req.body.year,
    cover : req.body.cover
  }, 
  function (err, album) {
    if (err) return res.status(500).send("There was a problem adding the information to the database.");
    res.status(200).send(album);
  });
});


// Returns all the albums in the database
router.get('/', function (req, res) {
    Album.find({}, function (err, albums) {
        if (err) return res.status(500).send("There was a problem finding the albums.");
        res.status(200).send(albums);
    });
});


// Gets a single album from the database

router.get('/:id', function (req, res) {
    Album.findById(req.params.id, function (err, album) {
      if (err) return res.status(500).send("There was a problem finding the album.");
      if (!album) return res.status(404).send("No album found.");
      res.status(200).send(album);
    });
  });

// Deletes an album from the database

router.delete('/:id', function (req, res) {
    Album.findByIdAndRemove(req.params.id, function (err, album) {
        if (err) return res.status(500).send("There was a problem deleting the album.");
        res.status(200).send("The album  "+ album.name +" was deleted.");
    });
  });

// Updates a single album in the database
router.put('/:id', function (req, res) {
    Album.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, album) {
        if (err) return res.status(500).send("There was a problem updating the album.");
        res.status(200).send(album);
    });
  });


module.exports = router;