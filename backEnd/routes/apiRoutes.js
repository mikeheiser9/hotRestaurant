var resturant = require("./../data/reservation.js");

module.exports = function (app) {
  
  app.get("/api:tables?", function(req, res) {
    return res.json(resturant);
  })
  console.log(app);
}
