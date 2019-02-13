var db = require('../models');
var Bookstore = db.Bookstore;
var seedBookstores = require('../seeds/bookstores');

module.exports = {

  // show all bookstores in the db
  index: function index(req,res) {
    Bookstore.find(function (err, allBookstores) {
      err ? res.status(500).send("There was a problem finding the bookstores.") :
      res.json({ bookstores: allBookstores });
    });
  },


  // create a single bookstore
  create: function (req, res){
    var newBookstore = req.body;
    Bookstore.create(newBookstore, function(err, savedBookstore){
      err ? res.status(500).send("There was a problem adding the bookstore information to the database.") :
      res.status(201).send(savedBookstore);
    });
  },

// reset database and redirect to original seed bookstores
  nuke: function (req, res) {
    Bookstore.remove({}, function (err, removedBookstores) {
      err ? res.status(500).send("There was an error.") :
        Bookstore.create(seedBookstores, function (err, createdBookstores) {
          err ? res.status(500).send("There was an error.") :
            res.redirect('/api/bookstores');
        });
      });
  },

  // show single bookstore
  show: function (req, res){
    var bookstoreId = req.params.bookstoreId;
    Bookstore.findById({_id: bookstoreId}, function (err, bookstore) {
        err ? res.status(500).send("There was a problem finding the bookstore.") :
        !bookstore ? res.status(404).send( "The bookstore "+ bookstore.name +" was not found.") :
        res.status(200).send(bookstore);
      })
  },

  // delete a single bookstore
  destroy: function (req, res){
    var bookstoreId = req.params.bookstoreId;
    Bookstore.findByIdAndRemove({_id: bookstoreId}, function (err, bookstore) {
        err ? res.status(500).send("There was a problem removing the bookstore.") :
        res.status(200).send("The bookstore "+ bookstore.name +" was deleted." );
      })
  },

  // update a bookstore
  update: function (req, res){
    var bookstoreId = req.params.bookstoreId;
    var updateBookstore = req.body;
    Bookstore.findByIdAndUpdate({_id: bookstoreId}, req.body, { new: true }, function (err, bookstore) {
      err ? res.status(500).send("There was a problem updating the bookstore.") :
      res.status(200).send(bookstore);
      })
    }

};
