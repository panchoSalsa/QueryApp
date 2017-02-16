var express  = require('express'),
	app      = express(),
	port     = process.env.PORT || 8080,
	morgan       = require('morgan'),
	bodyParser   = require('body-parser'),
	methodOverride = require('method-override');

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // get information from html forms
app.set('view engine', 'ejs'); // set up ejs for templating


// routes ==================================================
require('./app/routes')(app); // configure our routes

// launch ======================================================================
app.listen(port);


