const UserModel = require("../models/userModel");

exports.getAllUsers = async function (req, res) {
  let users;
  try {
    users = await UserModel.find();
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
    return;
  }
  res.status(200).json({
    status: "success",
    data: users,
  });
};

exports.getUserById = async function (req, res) {};

exports.createUser = async function (req, res) {
  const { username, email, password, role } = req.body;
  let user;
  try {
    user = await UserModel.create({ username, email, password, role, });
  } catch (error) {
      res.status(500).json({
          status: "fail",
          message: error.message,
      });
    return;
    }
    
    res.status(201).json({
        status: "success",
        data: user,
    });
};

exports.updateUserById = async function (req, res) {};

exports.deleteUserById = async function (req, res) {};
