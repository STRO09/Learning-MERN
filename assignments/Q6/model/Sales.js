const mongoose = require("mongoose");

const SaleSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
    required: true,
  },
  totalPrice: {
    type: Number,
    min: 0,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const SalesModel = mongoose.model("Sales", SaleSchema);

module.exports = SalesModel;
