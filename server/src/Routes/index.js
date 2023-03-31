const { Router } = require("express");
const router = Router();

const usersRoutes = require("./usersRoutes");
// const storesRoutes = require("./storesRoutes");
const productsRoutes = require("./productsRoutes");
const productReviewRoutes = require("./productReviewRoutes");

router.use("/users", usersRoutes);
// router.use("/stores", storesRoutes);
router.use("/products", productsRoutes);
router.use("/productReview", productReviewRoutes);

// Importar todos los routers;
//const UsersRoutes = require("./usersRoutes");

// Configurar los routers
//router.use("/users", UsersRoutes);

<<<<<<< HEAD
=======

const usersRoutes = require("./usersRoutes");
const storesRoutes = require("./storesRoutes");
const productsRoutes = require("./productsRoutes");
const productReviewRoutes = require("./productReviewRoutes");
const paymentsRoutes = require("./paymentsRoutes");

router.use("/users", usersRoutes);
router.use("/stores", storesRoutes);
router.use("/products", productsRoutes);
router.use("/productReview", productReviewRoutes);
router.use("/payments", paymentsRoutes);


>>>>>>> 0d0a2c0 (new change)
module.exports = router;
