var tableData = require('../data/tableData.js');

module.exports = function (app) {
    app.get("/api/tables/tableData.js", function (req, res) {
        res.json(tableData);
    });
}

