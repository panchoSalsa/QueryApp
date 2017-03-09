var db = require('./dbconnection');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls

    app.get('/', function(req, res) {
        res.render('../public/index.ejs');
    });

    app.get('/all', function(req, res) {
        db.query("Select record_id from TestingTable",function(err, rows, fields) {
            if (!err) {
                res.send(JSON.stringify(rows));
            }
            else
                res.send(err);
        });
    });

    app.post('/query', function(req,res) {
        // prepend select statement to JQueryBuilder result
        var sql_query = "select record_id from TestingTable where " + req.body.query;
        db.query(sql_query, function(err, rows, fields) {
            if (!err)
                res.send(JSON.stringify(rows));
            else
                res.send(err);
        });
    });
};
