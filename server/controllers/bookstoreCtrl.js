var db = require('../models');
var Bookstore = db.Bookstore;
var util = require('./utils');
var seedBookstores = require('../seeds/bookstores');

module.exports = {
  index: function index(req,res) {
    Bookstore.find(function (err, allBookstores) {
      err ? res.status(500).json({ error: err.message }) :
        res.json({ bookstores: allBookstores });
    });
  },

  create: function (req,res) {
      var newBookstore = req.body;
      Bookstore.create(newBookstore, function (err, savedBookstore) {
        err ? res.status(500).json({ error: err.message }) :
          res.status(201).json(savedBookstore);
      });
  },

  nuke: function (req, res) {
    Bookstore.remove({}, function (err, removedBookstores) {
      err ? res.status(500).json({ error: err.message }) :
        Bookstore.create(seedBookstores, function (err, createdAbums) {
          err ? res.status(500).json({ error: err.message }) :
            res.redirect('/api/bookstores');
        });
      });
  },

  show: function (req,res) {
    var bookstoreId = req.params.bookstoreId;
    Bookstore.findOne({ _id: bookstoreId }, util.getSingularResponse.bind(res));
  },

  destroy: function (req, res){
    var bookstoreId = req.params.bookstoreId;
    Bookstore.findOneAndRemove({ _id: bookstoreId }, util.getSingularResponse.bind(res));
  } ,

  update: function (req,res) {
    var bookstoreId = req.params.bookstoreId;
    var updateBookstore = req.body;
    Bookstore.findOneAndUpdate({ _id: bookstoreId }, req.body, { new: true }, util.getSingularResponse.bind(res));
  }

};
