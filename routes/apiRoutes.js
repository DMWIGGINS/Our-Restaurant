var tableData = require('../data/tableData.js');
var waitinglistData = require('../data/waitinglistData');

module.exports = function (app) {
    app.get("/api/tables/tableData.js", function (req, res) {
        res.json(tableData);
    });
    app.get("/api/tables/waitinglistData.js", function (req, res) {
        res.json(waitinglistData);
    });
}

