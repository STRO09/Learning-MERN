const express = require("express");
const router = express.Router();
const {
  getSales,
  addSale,
  patchSales,
  deleteSales,
} = require("../controller/SaleController");

router.get("/sales", getSales);
router.post("/sales", addSale);
router.patch("/sales/:id", patchSales);
router.delete("/sales/:id", deleteSales);

module.exports = router;
