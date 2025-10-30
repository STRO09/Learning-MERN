const express = require("express");
const session = require("express-session");
const router = require("./routes/UserRouter");
const app = express();

const db = require("./db")
db;
app.use(express.json());
app.use(
  session({
    secret: "dfsod",
    resave: false,
    saveUninitialized: false,
  })
);
app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on 3000....");
});
