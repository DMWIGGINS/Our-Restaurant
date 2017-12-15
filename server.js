var express = require ("express");
var bodyParser = require("body-parser");
var path = require("path");


//Set up express app
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/htmlRoutes.js')(app);
require('./routes/apiRoutes.js')(app);

app.listen(PORT, function() {
    console.log("This is working! On " + PORT);
})