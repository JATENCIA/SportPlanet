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

module.exports = PaymentController;
