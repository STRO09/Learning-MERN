const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/hello", (req, res) => {
  res.render("hello");
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
