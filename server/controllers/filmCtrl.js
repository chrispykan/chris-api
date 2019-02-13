var db = require('../models');
var Film = db.Film;
var seedFilms = require('../seeds/films');

module.exports = {

  // show all films in the db
  index: function index(req,res) {
    Film.find(function (err, allFilms) {
      err ? res.status(500).send("There was a problem finding the films.") :
      res.json({ films: allFilms });
    });
  },


  // create single film
  create: function (req, res){
    var newFilm = req.body;
    Film.create(newFilm, function(err, savedFilm){
      err ? res.status(500).send("There was a problem adding the film information to the database.") :
      res.status(201).send(savedFilm);
    });
  },

// reset database and redirect to original seed films
  nuke: function (req, res) {
    Film.remove({}, function (err, removedFilms) {
      err ? res.status(500).send("There was an error.") :
        Film.create(seedFilms, function (err, createdFilms) {
          err ? res.status(500).send("There was an error.") :
            res.redirect('/api/films');
        });
      });
  },

  // show single film
  show: function (req, res){
    var filmId = req.params.filmId;
    Film.findById({_id: filmId}, function (err, film) {
        err ? res.status(500).send("There was a problem finding the film.") :
        !film ? res.status(404).send( "The film "+ film.name +" was not found.") :
        res.status(200).send(film);
      })
  },

  // delete a single film
  destroy: function (req, res){
    var filmId = req.params.filmId;
    Film.findByIdAndRemove({_id: filmId}, function (err, film) {
        err ? res.status(500).send("There was a problem removing the film.") :
        res.status(200).send("The film "+ film.name +" was deleted." );
      })
  },

  // update an film
  update: function (req, res){
    var filmId = req.params.filmId;
    var updateFilm = req.body;
    Film.findByIdAndUpdate({_id: filmId}, req.body, { new: true }, function (err, film) {
      err ? res.status(500).send("There was a problem updating the film.") :
      res.status(200).send(film);
      })
    }

};
