const SalesModel = require("../model/Sales");

const getSales = async (req, res) => {
  const data = await SalesModel.find();
  res.json(data);
};

const addSale = async (req, res) => {
  const data = SalesModel({
    productName: req.body.productName,
    quantity: req.body.quantity,
    totalPrice: req.body.totalPrice,
    customerName: req.body.customerName,
  });
  res.json(data);
};

const patchSales = async (req, res) => {
  const data = await findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.json(data);
};

const deleteSales = async (req, res) => {
  const data = await findByIdAndDelete({ _id: req.params.id });
  res.json(data);
};

module.exports = { getSales, addSale, patchSales, deleteSales };
