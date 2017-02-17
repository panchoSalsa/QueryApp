var db = require('./dbconnection');


module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls

    // sample api route
    // app.get('/', function(req, res) {
    //     db.query("Select name from genres",function(err, rows, fields) {
    //         if (!err)
    //             res.send(rows);
    //         else
    //             res.send(err);
    //     });
    // });


    app.get('/', function(req, res) {
        res.render('../public/index.ejs');
    });


    // route to handle creating goes here (app.post)

    app.post('/query', function(req,res) {
        db.query(req.body.query, function(err, rows, fields) {
            if (!err)
                res.send(rows);
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
