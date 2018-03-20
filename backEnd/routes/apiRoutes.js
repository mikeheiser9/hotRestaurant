var express = require("express");
var resturant = require("./../data/reservation.js");
var rez = resturant.reservation;
var waitList = resturant.waitlist;
module.exports = function (app) {

  app.get("/api/:tables?", function(req, res) {
    return res.json(resturant);
  })
  console.log(app);


app.post("/api/new", function(req, res){
  var newRez = req.body;
  console.log(newRez);
  if (waitList.length <= 5) {
    rez.push(newRez);
  }
  else {
    waitList.push(newRez);
  }
  res.json(newRez);
})
}