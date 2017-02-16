var mysql = require('mysql'),
	database_config = require('../config/database');	// load the database config

var connection = mysql.createConnection(database_config);

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;