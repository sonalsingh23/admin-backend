const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    if (!admin.isActive) return res.status(403).json({ message: "Admin blocked" });

    const secret = process.env.JWT_SECRET;
    if (!secret) return res.status(500).json({ message: "JWT secret not configured" });

    const token = jwt.sign({ id: admin._id, role: admin.role }, secret, { expiresIn: "1d" });

    res.json({
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.verifyToken = async (req, res) => {
  try {
    
    const admin = await Admin.findById(req.admin.id).select('-password');
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    if (!admin.isActive) return res.status(403).json({ message: "Admin blocked" });

    res.json({
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
