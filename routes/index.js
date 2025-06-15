const express = require("express");
const mysql2 = require("mysql2"); // import mysql2
const route = express.Router();

// database connection
const pool = mysql2.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "express_form_1_prac",
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
  const { name, email, password, tel } = req.body; // object destructing
  const val = [name, email, password, tel];

  const sql = `INSERT INTO registration (cname, cemail, cpassword, cmob) VALUES (?,?,?,?);`; // '?' prevents SQL injection
  pool.query(sql, val, (err, rows, fields) => {
    if (err) {
      console.log("Insertion failed");
      console.log(err.message);
      return;
    }
    console.log("Inserted successfully");
  });
  //   console.log(req.body);
  res.redirect("/");
});

module.exports = route;
