
var express  = require('express');
var favicon = require('serve-favicon');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var configDB = require('./config/database.js');
var ejs = require('ejs');
var engine = require('ejs-mate');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration



//favicon setter
//console.log(__dirname);
app.use(favicon(__dirname + '/public/img/android-icon-192x192.png'));
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended: true})); // get information from html forms
app.engine('ejs', engine);
app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: configDB.key,
    resave: true,
    saveUninitialized: true
}));// session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
