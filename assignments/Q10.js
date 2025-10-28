const express = require("express");

const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile("index.html", {root: __dirname});
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
