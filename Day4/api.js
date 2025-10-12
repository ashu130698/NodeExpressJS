const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRouter");
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());  //helps acces the body of request
app.use("/user", userRouter);

module.exports = app;
