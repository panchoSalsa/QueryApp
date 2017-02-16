var db = require('./dbconnection');


module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls

    // sample api route
    app.get('/', function(req, res) {
        // use mongoose to get all nerds in the database
        // Nerd.find(function(err, nerds) {

        //     // if there is an error retrieving, send the error. 
        //                     // nothing after res.send(err) will execute
        //     if (err)
        //         res.send(err);

        //     res.json(nerds); // return all nerds in JSON format
        // });

        db.query("Select name from genres",function(err, rows, fields) {
            if (!err)
                res.send(rows);
            else
                res.send(err);
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/index', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
