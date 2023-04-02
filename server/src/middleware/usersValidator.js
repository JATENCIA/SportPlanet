const { check } = require("express-validator");
const { validateUsersResult } = require("../helpers/usersHelper");
const Users = require("../Models/Users");

const validateUsersCreate = [
  check("name")
    .exists()
    .withMessage("Name is required")
    .not()
    .isEmpty()
    .withMessage("Name cannot be empty")
    .matches(/^[A-Za-z ]+$/)
    .withMessage("Name must contain only letters"),

  check("lastName")
    .exists()
    .withMessage("Last name is required")
    .not()
    .isEmpty()
    .withMessage("Last name cannot be empty")
    .matches(/^[A-Za-z]+$/)
    .withMessage("Last name must contain only letters"),

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
    .custom(async (value, { req }) => {
      const existingUser = await Users.findOne({ eMail: value });
      if (existingUser && existingUser._id.toString() !== req.params.userId) {
        throw new Error("Email already exists");
      }
      return true;
    }),
  // check("dni")
  //   .exists()
  //   .withMessage("DNI is required")
  //   .matches(/^[0-9]+$/)
  //   .withMessage("DNI must contain only numbers")
  //   .not()
  //   .isEmpty()
  //   .withMessage("DNI cannot be empty")
  //   .isLength({ min: 7, max: 7 })
  //   .withMessage("DNI must have exactly 7 digits")
  //   .custom(async (value, { req }) => {
  //     const existingUser = await Users.findOne({ dni: value });
  //     if (existingUser && existingUser._id.toString() !== req.params.userId) {
  //       throw new Error("DNI already in use");
  //     }
  //     return true;
  //   }),
  // check("telephone")
  //   .exists()
  //   .withMessage("Telephone number is required")
  //   .not()
  //   .isEmpty()
  //   .withMessage("Telephone number cannot be empty")
  //   .matches(/^[0-9]+$/)
  //   .withMessage("Telephone number must contain only numbers")
  //   .isLength({ min: 9, max: 9 })
  //   .withMessage("Telephone number must have exactly 9 digits")
  //   .custom(async (value, { req }) => {
  //     const existingUser = await Users.findOne({ telephone: value });
  //     if (existingUser && existingUser._id.toString() !== req.params.userId) {
  //       throw new Error("Telephone number already in use");
  //     }
  //     return true;
  //   }),
  // (req, res, next) => {
  //   validateUsersResult(req, res, next);
  // },
];

module.exports = { validateUsersCreate };
