var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

mongoose.Promise = Promise;

var Article = require('./models/Article');
var app = express();

var PORT = process.env.PORT || 3000;
var uriString = process.env.MONGODB_URI || 'mongodb://localhost/nytReact';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('public'));

mongoose.connect(uriString);
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
