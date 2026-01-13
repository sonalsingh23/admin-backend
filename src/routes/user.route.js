const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
// const authMiddleware = require("../middleware/auth.middleware");

// test
router.get("/test", (req, res) => {
  res.json({ message: "User route working" });
});

// public
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/forgot-password", userController.forgotPassword);

// protected


module.exports = router;
