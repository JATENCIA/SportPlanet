const { check } = require("express-validator");
const { validateStoresResult } = require("../helpers/storesHelper");
const Stores = require("../Models/Stores");

const validateStoresCreate = [
  check("name")
    .exists()
    .withMessage("Name is required")
    .not()
    .isEmpty()
    .withMessage("Name cannot be empty")
    .matches(/^[A-Za-z- ]+$/)
    .withMessage("Name must contain only letters and hyphens"),
  check("image")
    .optional()
    .isURL()
    .withMessage("Invalid image URL format")
    .matches(
      /^$|^(http(s?):\/\/)([0-9a-zA-Z]+\.)+[a-zA-Z]{2,}(:[0-9]+)?(\/[^\s]*)?$/
    )
    .withMessage(`Invalid image URL format. Must be a valid URL or empty.`),
  check("eMail")
    .exists()
    .withMessage("Email already exists")
    .isEmail()
    .withMessage("Invalid email")
    .not()
    .isEmpty()
    .withMessage("Email cannot be empty")
    .custom(async (value) => {
      const existingStore = await Stores.findOne({ eMail: value });
      if (existingStore) {
        throw new Error("Email already exists");
      }
    }),
  (req, res, next) => {
    validateStoresResult(req, res, next);
  },
];

module.exports = { validateStoresCreate };
