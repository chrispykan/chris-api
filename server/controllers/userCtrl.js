var db = require('../models');
var User = db.User;


module.exports = {
  // show all users in the db
  index: function index(req,res) {
    User.find(function (err, allUsers) {
      err ? res.status(500).send("There was a problem finding the users.") :
      res.json({ users: allUsers });
    });
  },
  // index: function index(req,res) {
  //   User.find(function (err, allUsers) {
  //     err ? res.status(500).json({ error: err.message }) :
  //       res.json({ Users: allUsers });
  //   });
  // },


  // create single user
  create: function (req, res){
    var newUser = req.body;
    User.create(newUser, function(err, savedUser){
      err ? res.status(500).send("There was a problem adding the user information to the database.") :
      res.status(201).send(savedUser);
    });
  },
  // create: function (req,res) {
  //     var newUser = req.body;
  //     User.create(newUser, function (err, savedUser) {
  //       err ? res.status(500).json({ error: err.message }) :
  //         res.status(201).json(savedUser);
  //     });
  // },


  // show single user
  show: function (req, res){
    var userId = req.params.userId;
    User.findById({_id: userId}, function (err, user) {
        err ? res.status(500).send("There was a problem finding the user.") :
        !user ? res.status(404).send(user.name + " was not found.") :
        res.status(200).send(user);
      })
  },
  // show: function (req,res) {
  //   var userId = req.params.userId;
  //   User.findOne({ _id: userId }, util.getSingularResponse.bind(res));
  // },


  // delete single user
  destroy: function (req, res){
    var userId = req.params.userId;
    User.findByIdAndRemove({_id: userId}, function (err, user) {
        err ? res.status(500).send("There was a problem removing the user.") :
        res.status(200).send("The user "+ user.name +" was deleted." );
      })
  },
  // destroy: function (req, res){
  //   var userId = req.params.userId;
  //   User.findOneAndRemove({ _id: userId }, util.getSingularResponse.bind(res));
  // } ,


  // update a user
  update: function (req, res){
    var userId = req.params.userId;
    var updateUser = req.body;
    User.findByIdAndUpdate({_id: userId}, req.body, { new: true }, function (err, user) {
      err ? res.status(500).send("There was a problem updating the user.") :
      res.status(200).send(user);
      })
    }
//     update: function (req,res) {
//     var userId = req.params.userId;
//     var updateUser = req.body;
//     User.findOneAndUpdate({ _id: userId }, req.body, { new: true }, util.getSingularResponse.bind(res));
//   }
  
// };

};





