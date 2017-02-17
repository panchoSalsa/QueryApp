var db = require('./dbconnection');


module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls

    // sample api route



    app.get('/', function(req, res) {
        res.render('../public/index.ejs');
    });

    app.get('/all', function(req, res) {
        db.query("Select * from genres",function(err, rows, fields) {
            if (!err) {
                res.send(JSON.stringify(rows));
            }
            else
                res.send(err);
        });
    });


    // route to handle creating goes here (app.post)

    app.post('/query', function(req,res) {
        db.query("select first_name from stars limit 0,5", function(err, rows, fields) {
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
