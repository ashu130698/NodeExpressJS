const {
    BAD_REQUEST,
    SUCCESS,
    CREATED,
    NOT_FOUND
} = require("../utils/constant");

let userDB = [];

exports.getAllUsers = (req, res) => {
    res.status(SUCCESS).json({
        status:"success",
        count: userDB.length,
        data :userDB,
    });
};

exports.getUserById = (req, res)=> {
    const id = req.params.id;

    for(let i=0; i < userDB.length; i++){
        if (userDB[i].username == id) {
            res.status(SUCCESS).json({
                status: "success",
                data: userDB[i]
            });
            return;
        }
    }
    res.status(NOT_FOUND).json({
        status: "failure",
        message: `User with id ${id} not found`,
    });
};

exports.createUser = (req, res)=> {
    const { email, username, phone, password } = req.body;
    if (
        email == undefined ||
        password == undefined ||
        phone == undefined ||
        username == undefined
    ) {
        res.status(BAD_REQUEST).json({
            status:"failure",
            message: "Please provide correct information.",
        });
        return;
    }

    let user = {
        email, 
        password,
        phone,
        username
    };
    userDB.push(user);
    res.status(CREATED).json({
        status:"success",
        data:user
    });
};
// update user by username
exports.updateUser = (req, res) => {
    const {username,email,phone,password}=req.body;

    if (!username) {
        res.status(BAD_REQUEST).json({
            status:"failure",
            message :"Username is require to update user",
        });
        return;
    }
     for(let i=0; i< userDB.length; i++) {
        if (userDB[i].username === username) {
            if (email) userDB[i].email=email;
            if (password) userDB.password=password;
            if (phone) userDB.phone=phone;

            res.status(SUCCESS).json({
                status:"success",
                message:`User ${username} updated successfully`,
                date: userDB[i],
            });
            return;
        }
     }
     res.status(NOT_FOUND).json({
        status:"success",
        message:"User with username ${username} not found",
     });
};
// delete all user
exports.deleteAllUsers = (req, res) => {
    userDB=[];
    res.status(SUCCESS).json({
        status:"success",
        message:"All users delete successfully",
    });
    
};
// delete user by id
exports.deleteUserById = (req, res) => {
    const id = req.params.id;

    for(let i=0; i< userDB.length; i++) {
        if (userDB[i].username===id) {
            const deleteUser = userDB.splice(i,1);
            res.status(SUCCESS).json({
                status:"success",
                message: `User ${id} dlete successfully`,
                data:delete[0],
            });
            return;
        }
    }

    res.status(NOT_FOUND).json({
        status:"failure",
        message:"User with username ${id} not found",
    });
};