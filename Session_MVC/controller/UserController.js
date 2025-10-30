const UserModel = require("../model/model");
const bcrypt = require("bcryptjs");

const RegisterUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const data = UserModel({ userName: userName, password: hash });
    const result = await data.save();
    res.json(result);
  } catch (err) {
    throw new Error(err.message);
  }
};

const LoginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await UserModel.findOne({ userName });
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.userName = req.body.userName;
      res.end("Login Successfull....");
    } else {
      res.end("Invalid credentials or login error...");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const LogoutUser = async (req, res) => {
  try {
    req.session.destroy(() => {
      console.log("Logged out successfully...");
    });
    res.end("Logged out successfully...");
  } catch (error) {
    throw new Error(error.message);
  }
};

const dashboard = async (req, res) => {
  try {
    if (req.session.username) res.end("Welcome to dashboard bro");
    else res.end("Session expired... Login again");
  } catch (error) {
    res.end("Session expired... Login again");
  }
};

module.exports = { RegisterUser, LoginUser, LogoutUser, dashboard };
