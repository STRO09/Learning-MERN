const express = require("express");
const router = require("./router/SalesRouter");
const connectDB =require('./db')
const app = express();
connectDB
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(4000, () => {
  console.log("Server is listening on 4000...");
});
