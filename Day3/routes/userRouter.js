const express = require("express");

const {
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/:id", getUserById); //get user by id
userRouter.post("/", createUser); //create new user
userRouter.patch("/:id", updateUserById); //update user by id
userRouter.delete("/:id", deleteUserById); //delete user by id

module.exports = userRouter;
