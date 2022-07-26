const express = require("express");
const { userController } = require("../controllers/index");
const validate = require("../middlewares/reqValidator");
const userSchema = require("../validation/user.schema");
const router = express.Router();
const auth = require("../middlewares/authorization");

router
    .route("/user/:id")
    .delete(
        auth, 
        userController.deleteUser
    );

router
    .route("/login")
    .post(
        validate(userSchema), 
        userController.loginUser
    );

router
    .route("/register")
    .post(
        validate(userSchema), 
        userController.createUser
    );

module.exports = router;