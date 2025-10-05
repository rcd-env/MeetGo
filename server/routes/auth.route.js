const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/signup", authController.signupUser);
router.post("/login", authController.loginUser);
router.get("/logout", authController.logoutUser);

module.exports = router;
