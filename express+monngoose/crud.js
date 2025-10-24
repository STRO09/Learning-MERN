const db = require("./db");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const empSchema = mongoose.Schema({
  name: String,
  salary: Number,
});

const empModel = mongoose.model("emp", empSchema);

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await empModel.find();
    res.json(result);
  } catch (err) {
    throw new Error(err.message);
  }
});

app.post("/add", async (req, res) => {
  try {
    const data = new empModel({
      name: req.body.name,
      salary: req.body.salary,
    });
    const result = await data.save();
    res.json(result);
  } catch (err) {
    throw new Error(err.message);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const result = await empModel.findByIdAndDelete({ _id: req.params.id });
    res.json(result);
  } catch (err) {
    throw new Error(err.message);
  }
});

app.patch("/update/:id", async (req, res) => {
  try {
    const result = await empModel.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.json(result);
  } catch (err) {
    throw new Error(err.message);
  }
});

app.listen(3001, () => {
  console.log("Listening at port 3001....");
});
