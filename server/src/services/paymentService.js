const axios = require("axios");
const config = require("../config");

class PaymentService {
  async createPayment(req, res) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const shoppingcart = req.body;

    const items_ml = shoppingcart?.map((elem) => ({
      title: elem.name,
      unit_price:
        elem.discount !== 0
          ? elem.price - (elem.price / 100) * elem.discount
          : elem.price,
      quantity: elem.quantity,
      currency_id: "USD",
    }));

    const body = {
      payer_email: shoppingcart[0].eMail,
      items: items_ml,
      external_reference: shoppingcart[0].eMail,
      payment_methods: {
        excluded_payment_types: [
          {
            id: "atm",
          },
        ],
        installments: 1,
      },
      back_urls: {
        failure: `${config.API_URL_BACK}/payments/success`,
        pending: `${config.API_URL_BACK}/payments/success`,
        success: `${config.API_URL_BACK}/payments/success`,
      },
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.ACCESS_TOKEN}`,
      },
    });

    return { url: payment.data.init_point, id: payment.data.id };
  }
}

module.exports = PaymentService;
