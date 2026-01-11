const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const adminConfig = require("../config/admin.config");
const middleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    // check email
    if (email !== adminConfig.email) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // check password (bcrypt)
    const isMatch = await bcrypt.compare(
      password,
      adminConfig.passwordHash
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
console.log(process.env.JWT_SECRET);
    // generate token
    const token = jwt.sign(
      { role: adminConfig.role, email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "Admin login successful",
      token,
      admin: {
        email,
        role: adminConfig.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
    });
  }
});
router.post("/verify", middleware, (req, res) => {
  return res.status(200).json({
    message: "Token is valid",
  });
}); 

module.exports = router;
