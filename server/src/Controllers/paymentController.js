const config = require("../config");
const mercadopago = require("mercadopago");

/* It creates a payment link for a user to pay for a subscription */

class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }

  async getPaymentLink(req, res) {
    try {
      const payment = await this.subscriptionService.createPayment(req, res);
      return res.json(payment);
    } catch (error) {
      return res
        .status(500)
        .json({ error: true, msg: "Failed to create payment" });
    }
  }
}

const successMercadoPago = (req, res) => {
  const infoMercadoPago = req.query;

  const ACCESS_TOKEN = config.ACCESS_TOKEN;

  mercadopago.configure({
    access_token: ACCESS_TOKEN,
  });

  const transactionId = infoMercadoPago.payment_id;

  mercadopago.payment
    .get(transactionId)
    .then(function (payment) {
      console.log("🚀 ~ file: paymentController.js:37 ~ payment:", payment);
    })
    .catch(function (error) {
      console.log("🚀 ~ file: paymentController.js:40 ~ error:", error);
    });
};
module.exports = { PaymentController, successMercadoPago };
