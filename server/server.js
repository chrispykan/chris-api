var express = require('express');
var http = require('http');
var morgan = require('morgan');
var app = express();
var cors = require('cors');
var routes = require ('./config/routes');
var bodyParser = require('body-parser');
var db = require('./models/index');
var authRouter = require('./config/authRouter');

// CONNECT TO DATABASE
var port = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI;

const server = http.createServer(app);
server.listen(port, ()  => {
  console.log(`Express server listening on port ${port}`);
});


// REQUIRE DATABASEB URI
require('dotenv').config();


// 
// app.use(morgan('combined'));

// configure cors (for allowing cross-origin requests)
app.use(cors());

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '../client/public'));

app.get('/', function (req, res) {
  res.render('../client/public/index.html');
});

app.get('/reset', function (req, res) {
  res.render('site/reset');
});


// sign up/in auth routes
authRouter(app);

// ROUTES
app.use('/api', routes);
// /api/users
// /api/albums
// /api/artists
// /api/bookstores
// /api/films