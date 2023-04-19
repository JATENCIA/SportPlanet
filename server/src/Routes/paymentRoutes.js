const express = require("express");
const router = express.Router();

var nodemailer = require("nodemailer");

const PaymentService = require("../services/paymentService");
const PaymentController = require("../Controllers/paymentController");
const PaymentInstance = new PaymentController(new PaymentService());

router.post("/", (req, res, next) => {
  PaymentInstance.getPaymentLink(req, res);
});

router.post("/success", async (req, res) => {
  try {
    const infoMercadoPago = req.body;
    console.log(
      "🚀 ~ file: paymentRoutes.js:17 ~ router.post ~ infoMercadoPago:",
      infoMercadoPago
    );
  } catch (error) {
    res.status(500).send({ mensage: `${error}` });
  }
});

module.exports = router;
