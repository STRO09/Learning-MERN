const mongoose = require("mongoose");

const ConnectDB = mongoose
  .connect("mongodb://localhost:27017/testttt")
  .then(() => {
    console.log("Db is connected...");
  })
  .catch((e) => {
    throw new Error(e.message);
  });

ConnectDB;