const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ConnectDB = mongoose
  .connect("mongodb://localhost:27017/assignment")
  .then(() => {
    console.log("Db is connected...");
  })
  .catch((e) => {
    throw new Error(e.message);
  });

ConnectDB;

const ProductSchema = mongoose.Schema({
  pname: {
    type: String,
    minlength: 3,
    required: true,
  },
  pprice: {
    type: Number,
    min: 100,
    required: true,
  },
  pcategory: {
    type: String,
    Enum: ["Electronics", "Grocery", "Clothing"],
    default: "Other",
  },
  inStock: {
    type: Boolean,
    default: "true",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const ProductModel = mongoose.model("Products", ProductSchema);

app.get("/products", async (req, res) => {
  const data = await ProductModel.find();
  res.json(data);
});

app.post("/products", async (req, res) => {
  const data = ProductModel({
    pname: req.body.pname,
    pprice: req.body.pprice,
    pcategory: req.body.pcategory,
    inStock: req.body.inStock,
  });
  const result = await data.save();
  res.json(result);
});

app.patch("/products/:id", async (req, res) => {
  const data = await ProductModel.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  res.json(data);
});

app.delete("/products/:id", async (req, res) => {
  const data = await ProductModel.findByIdAndDelete({ _id: req.params.id });
  res.json(data);
});

app.listen(3001, () => {
  console.log("Server is listening on 3001....");
});
