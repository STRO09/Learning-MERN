const mongoose = require("mongoose");
const ConnectDb = require("../db/db");

const empSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});


const empModel = mongoose.model("emp",empSchema);

module.exports = empModel;