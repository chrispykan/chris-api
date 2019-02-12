// const express = require('express');
// const router = express.Router();

// const bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

// const User = require('../models/user');


// // USER CRUD

// // Creates a new user

// router.post('/', function (req, res) {
//   User.create({
//           name : req.body.name,
//           email : req.body.email,
//           password : req.body.password
//       }, 
//       function (err, user) {
//           if (err) return res.status(500).send("There was a problem adding the information to the database.");
//           res.status(200).send(user);
//       });
// });


// // Returns all the users in the database

// router.get('/', function (req, res) {
//     User.find({}, function (err, users) {
//         if (err) return res.status(500).send("There was a problem finding the users.");
//         res.status(200).send(users);
//     });
// });


// // Gets a single user from the database

// router.get('/:id', function (req, res) {
//   User.findById(req.params.id, function (err, user) {
//     if (err) return res.status(500).send("There was a problem finding the user.");
//     if (!user) return res.status(404).send("No user found.");
//     res.status(200).send(user);
//   });
// });

// // Deletes a user from the database

// router.delete('/:id', function (req, res) {
//   User.findByIdAndRemove(req.params.id, function (err, user) {
//       if (err) return res.status(500).send("There was a problem deleting the user.");
//       res.status(200).send("User "+ user.name +" was deleted.");
//   });
// });

// // Updates a single user in the database

// router.put('/:id', function (req, res) {
//   User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
//       if (err) return res.status(500).send("There was a problem updating the user.");
//       res.status(200).send(user);
//   });
// });

// module.exports = router;




var db = require('../models');
var User = db.User;
var util = require('./utils');
// var seedUser = require('../seeds/users');

module.exports = {
  index: function index(req,res) {
    User.find(function (err, allUsers) {
      err ? res.status(500).json({ error: err.message }) :
        res.json({ Users: allUsers });
    });
  },

  create: function (req,res) {
      var newUser = req.body;
      User.create(newUser, function (err, savedUser) {
        err ? res.status(500).json({ error: err.message }) :
          res.status(201).json(savedUser);
      });
  },

  nuke: function (req, res) {
    User.remove({}, function (err, removedUsers) {
      err ? res.status(500).json({ error: err.message }) :
        User.create(seedUsers, function (err, createdUsers) {
          err ? res.status(500).json({ error: err.message }) :
            res.redirect('/api/users');
        });
      });
  },

  show: function (req,res) {
    var userId = req.params.userId;
    User.findOne({ _id: userId }, util.getSingularResponse.bind(res));
  },

  destroy: function (req, res){
    var userId = req.params.userId;
    User.findOneAndRemove({ _id: userId }, util.getSingularResponse.bind(res));
  } ,

  update: function (req,res) {
    var userId = req.params.userId;
    var updateUser = req.body;
    User.findOneAndUpdate({ _id: userId }, req.body, { new: true }, util.getSingularResponse.bind(res));
  }

};



