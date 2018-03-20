// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var apiRoute = require("./backEnd/routes/apiRoutes.js");
var htmlRoute = require("./backEnd/routes/htmlRoutes.js");
var resturant = require("./backEnd/data/reservation.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", express.static('frontend'));

console.log(resturant);
apiRoute(app);
htmlRoute(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
