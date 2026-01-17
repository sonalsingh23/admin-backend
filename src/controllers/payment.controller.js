// controllers/payment.controller.js
const User = require("../models/User");
const Wallet = require("../models/Wallet");
const WalletTransaction = require("../models/WalletTransaction");

// controllers/payment.controller.js
const crypto = require("crypto");

exports.createPayuOrder = async (req, res) => {
  try {
    const { amount, name, email, phone } = req.body;

    if (!amount || !name || !email || !phone)
      return res.status(400).json({ message: "All fields required" });

    const txnid = "TXN" + Date.now();

    const hashString =
      `${process.env.PAYU_KEY}|${txnid}|${amount}|Add Wallet|${name}|${email}|||||||||||${process.env.PAYU_SALT}`;

    const hash = crypto
      .createHash("sha512")
      .update(hashString)
      .digest("hex");

    res.json({
      key: process.env.PAYU_KEY,
      txnid,
      amount,
      productinfo: "Add Wallet",
      firstname: name,
      email,
      phone,
      surl: "http://localhost:3000/api/payment/payu/success",
      furl: "http://localhost:3000/api/payment/payu/failure",
      hash,
      payuBaseUrl: process.env.PAYU_BASE_URL
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};



exports.payuSuccess = async (req, res) => {
  try {
    const {
      status,
      txnid,
      amount,
      email,
      productinfo,
      hash
    } = req.body;

    // 🔐 Recreate hash string (PayU format)
    const hashString =
      `${process.env.PAYU_SALT}|${status}|||||||||||${email}|${productinfo}|${amount}|${txnid}|${process.env.PAYU_KEY}`;

    const calculatedHash = crypto
      .createHash("sha512")
      .update(hashString)
      .digest("hex");

    // ❌ Hash mismatch → reject
    if (hash !== calculatedHash) {
      return res.status(400).send("Invalid hash");
    }

    // ❌ Payment failed
    if (status !== "success") {
      return res.redirect("http://localhost:3000/payment-failed");
    }

    // ✅ Payment success → credit wallet
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found");

    const wallet = await Wallet.findOne({ userId: user._id });
    if (!wallet) return res.status(404).send("Wallet not found");

    wallet.balance += Number(amount);
    await wallet.save();

    await WalletTransaction.create({
      userId: user._id,
      walletId: wallet._id,
      amount,
      type: "credit",
      txnId: txnid,
      status: "success",
      paymentGateway: "PayU"
    });

    return res.send("Payment success & wallet updated");

  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
};



