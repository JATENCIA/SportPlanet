const { check } = require("express-validator");
const { validateStoresResult } = require("../helpers/storesHelper");

const validateSlidersCreate = [
    check("image")
    .optional()
    .isURL()
    .withMessage("Invalid image URL format")
    .matches(
      /^$|^(http(s?):\/\/)([0-9a-zA-Z]+\.)+[a-zA-Z]{2,}(:[0-9]+)?(\/[^\s]*)?$/
    )
    .withMessage(`Invalid image URL format. Must be a valid URL or empty.`),
    (req, res, next) => {
        validateStoresResult(req, res, next);
      },
]

module.exports = validateSlidersCreate;