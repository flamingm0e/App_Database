// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
// connect to our mongoDB database
var monk = require('monk');
var db = monk('mongodb://192.168.254.25:27017/appsDB');
// configuration ===========================================

// set our port
var port = process.env.PORT || 8000;

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./api/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8000
app.listen(port);

// shoutout to the user
console.log('api running on at http://localhost:' + port+'/api/');
console.log('web app is running at http://localhost:'+port);

// expose app
exports = module.exports = app;
