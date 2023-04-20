const express = require("express");
const router = express.Router();
var nodemailer = require("nodemailer");
const PaymentService = require("../services/paymentService");
const {
  PaymentController,
  successMercadoPago,
} = require("../Controllers/paymentController");
const PaymentInstance = new PaymentController(new PaymentService());

router.post("/", (req, res, next) => {
  PaymentInstance.getPaymentLink(req, res);
});

router.get("/success", successMercadoPago);

module.exports = router;
