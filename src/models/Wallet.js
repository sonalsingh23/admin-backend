// models/Wallet.js
const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true, // one wallet per user
  },

  balance: {
    type: Number,
    default: 0, // 👈 wallet starts with 0
  },

  currency: {
    type: String,
    default: "INR",
  },

  status: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
  }

}, { timestamps: true });

module.exports = mongoose.model("Wallet", walletSchema);
