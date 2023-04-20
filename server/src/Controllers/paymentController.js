const Users = require("../Models/Users");
const mercadopago = require("mercadopago");
const Products = require("../Models/Products");
const config = require("../config");

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

const successMercadoPago = async (req, res) => {
  try {
    const infoMercadoPago = req.query;
    const ACCESS_TOKEN = config.ACCESS_TOKEN;

    if (infoMercadoPago?.status === "approved") {
      mercadopago.configure({
        access_token: ACCESS_TOKEN,
      });

      const user1 = await Users.findOne({
        eMail: infoMercadoPago.external_reference,
      });
      const transactionId = infoMercadoPago.payment_id;
      const dataMercadoPago = await mercadopago.payment.get(transactionId);
      const result = dataMercadoPago.body.additional_info.items;

      const myShopping = user1.myShopping || [];
      const pendingReviews = user1.pendingReviews || [];

      for (const elem of result) {
        // mySales.push(elem);
        let mySales = [];
        const product = await Products.findById(elem.category_id);
        const user = await Users.findById(product.user);

        user.mySales.push(elem);
        await user.save();
      }
      const mShopping = [...result];
      const pReviews = [...result];
      user1.myShopping.push(mShopping);
      user1.pendingReviews.push(pReviews);
      await user1.save();

      res.status(200).redirect("https://sport-planet.vercel.app/home");
    }
  } catch (error) {
    res.status(500).json({ error: true, msg: `${error}` });
  }
};

module.exports = { PaymentController, successMercadoPago };
