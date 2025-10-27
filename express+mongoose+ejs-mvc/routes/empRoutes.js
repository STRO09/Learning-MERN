const express = require('express');
const router = express.Router();
const {getEmpDetails, AddEmployee} = require("../controller/empController")

router.get("/",getEmpDetails);
router.post("/addEmp", AddEmployee);

module.exports = router;