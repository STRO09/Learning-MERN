const express = require("express");
const router = express.Router();
const {
  RegisterUser,
  LoginUser,
  LogoutUser,
  dashboard,
} = require("../controller/UserController");

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/logout", LogoutUser);
router.get("/", dashboard);

module.exports = router;
