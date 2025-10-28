const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.sendFile("views/home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("views/about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("views/contact.html", { root: __dirname });
});

app.get("/dashboard", (req, res) => {
  res.sendFile("views/dashboard.html", { root: __dirname });
});

app.use((req, res) => {
  res.sendFile("views/error.html", { root: __dirname });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
