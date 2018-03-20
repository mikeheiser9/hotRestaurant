var path = require("path");

module.exports = function (app) {
  console.log(app);
  app.get("/", function(req, res) {
  	// we're using path.join here to safely combine two filepaths
  	// __dirname + "/index.html" would also work
  	res.sendFile(path.join(__dirname, "../../frontend/reserve.html"));
  });

  app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "../../frontend/tables.html"));
  });

  app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "../../frontend/reserve.html"));
  });
}
