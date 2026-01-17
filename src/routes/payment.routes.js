// routes/payment.routes.js
const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");

router.post("/payu/create", paymentController.createPayuOrder);
router.post("/payu/success", paymentController.payuSuccess);
router.post("/payu/failure", (req, res) =>
  res.redirect("http://localhost:3000/payment-failed")
);

module.exports = router;
