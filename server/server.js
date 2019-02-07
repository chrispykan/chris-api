const express = require('express');
const app = express();
const db = require('./models/index');

// CONNECT TO DATABASE
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});



// REQUIRE DATABASEB URI
require('dotenv').config();

// connect to USER 
var UserController = require('./controllers/userCtrl')
app.use('/users', UserController);

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const router = require('./config/routes');
// const morgan = require('morgan')
// const db = require('./models');






// // // configure morgan (HTTP request logger middleware for node.js)
// // app.use(morgan('combined'));

// // // configure cors (for allowing cross-origin requests)
// // app.use(cors());

// // // configure bodyParser (for receiving form data)
// // app.use(bodyParser.urlencoded({ extended: true }));
// // // app.use(bodyParser.json({type: '*/*'}));

// // // serve static files from public folder
// // app.use(express.static(__dirname + '../client/public'));



// const UserController = require('./controllers/userCtrl')
// app.use('/users', UserController);


// // require .env file
// require('dotenv').config();

// // ROUTES
// // app.use('/api', router);
// //  /api/users
// //  /api/albums
// //  /api/artists
// //  /api/bookstores 
// //  /api/films


// // app.use(app.router);
// // routes.initialize(app);

// module.exports = app;