const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const Wallet = require("../models/Wallet");

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password)
//       return res.status(400).json({ message: "Email and password required" });

//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(401).json({ message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(401).json({ message: "Invalid credentials" });

//     if (!user.isActive)
//       return res.status(403).json({ message: "User blocked" });

//     const token = jwt.sign(
//       { id: user._id, role: "USER" },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email
//       }
//     });

//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    if (!user.isActive)
      return res.status(403).json({ message: "User blocked" });

    // 🔑 AUTO-CREATE memberAccount if missing
    if (!user.memberAccount) {
      const suffix = process.env.GAME_MEMBER_SUFFIX;
      user.memberAccount = `hee4b2_${user._id}_${suffix}`;
      await user.save();
    }

    const token = jwt.sign(
      { id: user._id, role: "USER" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        memberAccount: user.memberAccount
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


// Register new user
// Register new user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields required" });

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(409).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    // 👤 Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // 🔑 CREATE 24Game MEMBER ACCOUNT
    const suffix = process.env.GAME_MEMBER_SUFFIX; // best practice
    const memberAccount = `hee4b2_${user._id}_${suffix}`;

    user.memberAccount = memberAccount;
    await user.save();

    // 💰 Create wallet
    const wallet = await Wallet.create({
      userId: user._id
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        memberAccount: user.memberAccount
      },
      wallet: {
        balance: wallet.balance
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};



// forget-password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });

    // 🔐 SECURITY: Always return success message
    if (!user) {
      return res.json({
        message: "If the email exists, a reset link has been sent",
      });
    }

    // 🔑 Generate raw token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // 🔒 Hash token before saving
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // ⏰ 15 minutes expiry
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

    await user.save();

    // 🚧 TEMP: log token (email later)
    console.log("RESET PASSWORD TOKEN:", resetToken);

    res.json({
      message: "If the email exists, a reset link has been sent",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

