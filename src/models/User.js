const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  // 🔐 Password reset
  resetPasswordToken: String,
  resetPasswordExpires: Date,

  // 🚫 User status
  isActive: {
    type: Boolean,
    default: true
  },

  // 🎮 24Game member account (IMPORTANT)
  memberAccount: {
    type: String,
    unique: true,
    sparse: true // 👈 allows existing users without this field
  }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
