const { check } = require("express-validator");
const { validateProductReviewResult } = require("../helpers/productsHelper");

const validateProductsReviewCreate = [
  check("quality")
    .exists()
    .withMessage('The "quality" property is required.')
    .notEmpty()
    .withMessage('The "quality" property cannot be empty')
    .isInt({ min: 1, max: 5 })
    .withMessage('The "quality" property must be a number between 1 and 5'),
  check("comfort")
    .exists()
    .withMessage('The "comfort" property is required')
    .notEmpty()
    .withMessage('The "comfort" property cannot be empty.')
    .isInt({ min: 1, max: 5 })
    .withMessage('The "comfort" property must be a number between 1 and 5'),
  check("recommended")
    .exists()
    .withMessage('The "recommended" property is required.')
    .notEmpty()
    .withMessage('The "recommended" property cannot be empty.')
    .isInt({ min: 1, max: 5 })
    .withMessage(
      'The "recommended" property must be a number between 1 and 5.'
    ),
  check("comment")
    .exists()
    .withMessage('The "comment" property is required.')
    .notEmpty()
    .withMessage('The "comment" property cannot be empty.')
    .isString()
    .withMessage('The "comment" property must be a string.')
    .isLength({ min: 5, max: 200 })
    .withMessage(
      'The "comment" property must have a length between 5 and 200 characters.'
    ),
  check("attention")
    .exists()
    .withMessage('The "attention" property is required.')
    .notEmpty()
    .withMessage('The "attention" property cannot be empty.')
    .isInt({ min: 1, max: 5 })
    .withMessage('The "attention" property must be a number between 1 and 5.'),
  check("deliveryOnTime")
    .exists()
    .withMessage('The "deliveryOnTime" property is required.')
    .notEmpty()
    .withMessage('The "deliveryOnTime" property cannot be empty.')
    .isInt({ min: 1, max: 5 })
    .withMessage(
      'The "deliveryOnTime" property must be a number between 1 and 5.'
    ),
  check("packaging")
    .exists()
    .withMessage('The "packaging" property is required.')
    .notEmpty()
    .withMessage('The "packaging" property cannot be empty.')
    .isInt({ min: 1, max: 5 })
    .withMessage('The "packaging" property must be a number between 1 and 5.'),
  (req, res, next) => {
    validateProductReviewResult (req, res, next);
  },
];

module.exports = validateProductsReviewCreate;
