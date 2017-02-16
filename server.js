const mysql      = require('mysql'),
	database_config = require('./config/database');	// load the database config

var connection = mysql.createConnection(database_config);

connection.connect();

connection.query('SELECT name from genres', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();