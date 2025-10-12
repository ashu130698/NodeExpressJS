const UserModel = require("../models/userModel");

exports.getAllUsers = async function (req, res) {};

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
      })
    }
    
    res.status(201).json({
        status: "success",
        data: user,
    });
};

exports.updateUserById = async function (req, res) {};

exports.deleteUserById = async function (req, res) {};
