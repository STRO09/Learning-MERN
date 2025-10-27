const mongoose = require("mongoose");

const ConnectDB = mongoose.connect("mongodb://localhost:27017/mvcmern") .then(()=> {
    console.log("Db is connected..")
})
.catch((err)=> {
   throw new Error(err)
})

ConnectDB;