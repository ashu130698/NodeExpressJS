const UserModel = require("../model/userModel");

exports.getUserById= function (req, res) {
    res.status(200).send("You hit getUserById");
};


exports.createUser= async function (req, res) {
    const {username,email,password}=(req.body);
    try {
        await UserModel.create({username,email,password});
    } catch (error) {
        res.status(500).send ({
            status:"failure",
            error:error.message,
        });
    }
    res.status(200).send({
        status:"success",
        data: "User created successfully",
    });
};


exports.updateUserById= function (req, res) {
    res.status(200).send("You hit updateUserById");
};


exports.deleteUserById= function (req, res) {
    res.status(200).send("You hit deleteUserById");
};