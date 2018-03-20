// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var apiRoute = require("./backEnd/routes/apiRoutes.js");
var htmlRoute = require("./backEnd/routes/htmlRoutes.js");
var resturant = require("./backEnd/data/reservation.js");
var app = express();

console.log(resturant);
apiRoute(app);
htmlRoute(app);
