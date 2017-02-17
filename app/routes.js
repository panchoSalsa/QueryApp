var db = require('./dbconnection');


module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls

    app.get('/', function(req, res) {
        res.render('../public/index.ejs');
    });

    app.get('/all', function(req, res) {
        db.query("Select id, title, year, director from movies limit 0, 200",function(err, rows, fields) {
            if (!err) {
                res.send(JSON.stringify(rows));
            }
            else
                res.send(err);
        });
    });

    app.post('/query', function(req,res) {
        db.query(req.body.query, function(err, rows, fields) {
            if (!err)
                res.send(JSON.stringify(rows));
            else
                res.send(err);
        });
    });



    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    // app.get('/', function(req, res) {
    //     res.render('../public/form.ejs');; // load our public/index.ejs file
    // });

};
