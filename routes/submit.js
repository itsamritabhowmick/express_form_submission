const express = require("express");
const route = express.Router();

route.use((req, res, next) => {
  console.log("Index router middleware");
  next();
});

route.get("/", (req, res) => {
  //   res.send("Form Submitted Amrita");
  res.redirect("/");
});

module.exports = route;
