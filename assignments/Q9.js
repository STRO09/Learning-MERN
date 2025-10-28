const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/products", (req, res) => {
  const products = [
    {
      name: "Phone",

      price: 5000,
    },
    {
      name: "Laptop",

      price: 25000,
    },
  ];
  res.render("show", {products});
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
