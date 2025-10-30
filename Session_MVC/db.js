const mongoose = require("mongoose");

const COnnectDb = mongoose
  .connect("mongodb://localhost:27017/sessionmvc")
  .then(() => {
    console.log("Db is connected....");
  })
  .catch((err) => {
    throw new err();
  });

COnnectDb;
