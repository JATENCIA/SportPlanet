const { check } = require("express-validator");
const stripe = require("stripe")(process.env.STRIPE_SECRET_PASSWORD);
const { validatePaymentsResult } = require("../helpers/paymentsHelper");

const validateAmount = (value) => {
  return stripe.prices.list().then((result) => {
    const prices = result.data.filter(
      (price) => price.currency === "usd" && price.unit_amount >= 100
    );
    const validPrices = prices.map((price) => price.unit_amount);
    if (!validPrices.includes(value)) {
      return Promise.reject("Invalid amount");
    }
    return Promise.resolve(true);
  });
};

const validateCurrency = (value) => {
  if (!/^[a-zA-Z]+$/.test(value)) {
    throw new Error("Currency must only contain letters");
  }
  if (value !== "usd") {
    throw new Error("Invalid currency");
  }
  return true;
};

const validatePaymentsCreate = [
  check("amount")
    .exists()
    .withMessage("Amount is required")
    .isNumeric()
    .withMessage("Amount must be a number")
    .custom(validateAmount),
  check("currency")
    .exists()
    .withMessage("Currency is required")
    .notEmpty()
    .withMessage("Currency must not be empty")
    .isString()
    .withMessage("Currency must be a string")
    .custom(validateCurrency),
  check("description")
    .exists()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a string")
    .notEmpty()
    .withMessage("Description must not be empty")
    .isLength({ min: 15, max: 250 })
    .withMessage("Description length must be between 15 and 250 characters")
    .matches(/^[a-zA-Z]*$/)
    .withMessage("Description must only contain letters"),
  check("payment_method")
    .exists()
    .withMessage("Payment method is required")
    .notEmpty()
    .withMessage("Payment method must not be empty")
    .custom((value) => {
      if (typeof value === "string") {
        if (value.length < 15 || value.length > 50 || !value.includes("_")) {
          throw new Error(
            "Payment method must be a string of at least 15 and at most 50 characters with an underscore"
          );
        }
      } else if (typeof value === "number") {
        if (value.toString().length !== 12) {
          throw new Error("Payment method must be a 12-digit number");
        }
      } else {
        throw new Error(
          "Payment method must be either a string or a 12-digit number"
        );
      }
      return true;
    }),
  (req, res, next) => {
    validatePaymentsResult(req, res, next);
  },
];

module.exports = {
  validatePaymentsCreate,
};
