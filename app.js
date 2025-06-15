const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const HOST = "0.0.0.0";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const idx = require("./routes/index");
app.use("/", idx);

const submit_route = require("./routes/submit");
app.use("/submit", submit_route);

// app.get("/submit", (req, res) => {
//   //   res.send("Hello Amrita");
//   res.redirect("/");
// });

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
