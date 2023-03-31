const { Router } = require("express");
const router = Router();

const usersRoutes = require("./usersRoutes");
const storesRoutes = require("./storesRoutes");
const productsRoutes = require("./productsRoutes");
const productReviewRoutes = require("./productReviewRoutes");
// const userReviewRoutes = require("./userReviewRoutes");

router.use("/users", usersRoutes);
router.use("/stores", storesRoutes);
router.use("/products", productsRoutes);
router.use("/productReview", productReviewRoutes);
// router.use("/userReview", userReviewRoutes);

module.exports = router;
