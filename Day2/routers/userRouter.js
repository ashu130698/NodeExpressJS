const express = require("express");

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteAllUsers,
    deleteUserById
} = require("../controllers/usercontroller");
const userRouter = express.Router();

userRouter.get("/", getAllUsers); //get all users
userRouter.get("/:id", getUserById); // get usr by id
userRouter.post("/",createUser);
userRouter.patch("/",updateUser);
userRouter.delete("/",deleteAllUsers);
userRouter.delete("/:id",deleteUserById);

module.exports = userRouter;