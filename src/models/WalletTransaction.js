// models/WalletTransaction.js
const mongoose = require("mongoose");

const walletTransactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  walletId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallet",
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    enum: ["credit", "debit"],
    required: true,
  },

  status: {
    type: String,
    enum: ["success", "failed", "pending"],
    default: "success",
  },

  paymentGateway: {
    type: String,
    default: "PayU",
  },

  txnId: {
    type: String,
  }

}, { timestamps: true });

module.exports = mongoose.model("WalletTransaction", walletTransactionSchema);
