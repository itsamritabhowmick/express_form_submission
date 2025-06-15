const express = require("express");
const mysql2 = require("mysql2"); // import mysql2
const route = express.Router();

// database connection
const pool = mysql2.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  connectionLimit: 10,
});

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
