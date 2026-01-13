const express = require("express");
const router = express.Router();
const { loginAdmin, verifyToken } = require("../controllers/admin.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/login", loginAdmin);
router.get("/verify", authMiddleware, verifyToken);



module.exports = router;
