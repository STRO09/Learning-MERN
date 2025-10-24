const mongoose = require("mongoose");

const Connect = mongoose
  .connect("mongodb://localhost:27017/exprmongdb")
  .then(() => {
    console.log("Db is connected...");
  })
  .catch(() => {
    console.log("DB is not connected...");
  });

Connect;
