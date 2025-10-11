const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.patch("/", updateUserById);
userRouter.delete("/", deleteUserById);
