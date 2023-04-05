const { Router } = require("express");
const router = Router();

const {
  getProductReview,
  createProductReview,
  deleteProductReviewByid,
  updateProductReview,
} = require("../Controllers/productReviewControll");
const { validateProductReviewResult } = require("../helpers/productReviewHelper");

/* A route that is listening for a get request to the root of the server. */
router.get("/", getProductReview);
/* This is a route that is listening for a post request to the root of the server. */
router.post("/", validateProductReviewResult, createProductReview);
/* This is a route that is listening for a post request to the root of the server. */
router.post("/:id", deleteProductReviewByid);
/* This is a route that is listening for a put request to the root of the server. */
router.put("/:id", updateProductReview);

module.exports = router;
