const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.route("/user/signup").post(authController.signupUser);

router.route("/user/login").post(authController.loginUser);

router.route("/user/logout").get(authController.logoutUser);

module.exports = router;
