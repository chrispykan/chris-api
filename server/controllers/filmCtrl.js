var db = require('../models');
var Film = db.Film;
var util = require('./utils');
var seedFilms = require('../seeds/films');

module.exports = {
  index: function index(req,res) {
    Film.find(function (err, allFilms) {
      err ? res.status(500).json({ error: err.message }) :
        res.json({ films: allFilms });
    });
  },

  create: function (req,res) {
      var newFilm = req.body;
      Film.create(newFilm, function (err, savedFilm) {
        err ? res.status(500).json({ error: err.message }) :
          res.status(201).json(savedFilm);
      });
  },

  nuke: function (req, res) {
    Film.remove({}, function (err, removedFilms) {
      err ? res.status(500).json({ error: err.message }) :
        Film.create(seedFilms, function (err, createdAbums) {
          err ? res.status(500).json({ error: err.message }) :
            res.redirect('/api/films');
        });
      });
  },

  show: function (req,res) {
    var filmId = req.params.filmId;
    Film.findOne({ _id: filmId }, util.getSingularResponse.bind(res));
  },

  destroy: function (req, res){
    var filmId = req.params.filmId;
    Film.findOneAndRemove({ _id: filmId }, util.getSingularResponse.bind(res));
  } ,

  update: function (req,res) {
    var filmId = req.params.filmId;
    var updateFilm = req.body;
    Film.findOneAndUpdate({ _id: filmId }, req.body, { new: true }, util.getSingularResponse.bind(res));
  }

};
