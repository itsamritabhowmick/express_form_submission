const express = require("express");
const route = express.Router();

route.use((req, res, next) => {
  console.log("Index router middleware");
  next();
});

route.get("/", (req, res) => {
  res.render("index");
});

route.post("/", (req, res) => {
  //   console.log(req);
  console.log(req.body);
  res.redirect("/");
});

module.exports = route;
