var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var apiController = require('./controllers/apiController');
var setupController = require('./controllers/setupController');

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

apiController(app);
setupController(app);

app.listen(port);