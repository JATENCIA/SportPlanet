const { check } = require("express-validator");
const { validateProductsResult } = require("../helpers/productsHelper");

const validateProductsCreate = [
  check("name")
    .exists()
    .withMessage("Name is required")
    .not()
    .isEmpty()
    .withMessage("Name cannot be empty")
    .matches(/^[A-Za-z0-9 \-\.,_\/'"`]+$/)
    .withMessage(
      "Name must contain only letters, digits, spaces, hyphens, periods, commas, underscores, forward slashes, and quotes"
    ),
  // check("image")
  //   .optional()
  //   .isURL()
  //   .withMessage("Invalid image URL format")
  //   .matches(
  //     /^$|^(http(s?):\/\/)([0-9a-zA-Z]+\.)+[a-zA-Z]{2,}(:[0-9]+)?(\/[^\s]*)?$/
  //   )
  //   .withMessage(`Invalid image URL format. Must be a valid URL or empty.`),
  check("price")
    .exists()
    .withMessage("Price is required")
    .not()
    .isEmpty()
    .withMessage("Price cannot be empty")
    .isNumeric()
    .withMessage("Price must be a number")
    .custom((value) => {
      if (value < 0) {
        throw new Error("Price must be greater than or equal to 0");
      }
      return true;
    }),
  check("description")
    .exists()
    .withMessage("Description is required")
    .notEmpty()
    .withMessage("Description cannot be empty")
    .isString()
    .withMessage("Description must be a string")
    .isLength({ min: 30, max: 500 })
    .withMessage("Description length must be between 30 and 500 characters"),
  check("brands")
    .not()
    .isEmpty()
    .withMessage("Brand is required")
    .isString()
    .withMessage("Brand must be a string")
    .custom((value) => {
      if (/\d/.test(value)) {
        throw new Error("Brand cannot contain numbers");
      }
      return true;
    }),
  // (req, res, next) => {
  //   validateProductsResult(req, res, next);
  // },
];

module.exports = {
  validateProductsCreate,
};
