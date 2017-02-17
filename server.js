var express  = require('express'),
	app      = express(),
	port     = process.env.PORT || 8080,
	morgan       = require('morgan'),
	bodyParser   = require('body-parser'),
	methodOverride = require('method-override');

// set up our express application
app.use(morgan('dev')); // log every request to the console

//get information from html forms
app.use(bodyParser.urlencoded({'extended': 'true'}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.use(methodOverride());

app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users


// routes ==================================================
require('./app/routes')(app); // configure our routes

// launch ======================================================================
app.listen(port);


