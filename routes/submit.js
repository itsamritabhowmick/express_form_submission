const express = require("express");
const path = require("path");
const route = express.Router();

route.use((req, res, next) => {
  console.log("Index router middleware");
  next();
});

route.get("/", (req, res) => {
  //   res.send("Form Submitted Amrita");
  //   res.redirect("/");
  res.sendFile(path.join(__dirname, "../views/submit.html"));
  //   console.log(__dirname);
});

module.exports = route;
