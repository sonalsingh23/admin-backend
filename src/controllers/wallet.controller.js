// controllers/wallet.controller.js
const Wallet = require("../models/Wallet");

exports.getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.user.id });

    if (!wallet)
      return res.status(404).json({ message: "Wallet not found" });

    res.json({
      balance: wallet.balance,
      currency: wallet.currency,
      status: wallet.status
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
