const { Router } = require("express");
const router = Router();

const usersRoutes = require("./usersRoutes");
// const storesRoutes = require("./storesRoutes");
const productsRoutes = require("./productsRoutes");
const productReviewRoutes = require("./productsReviewRoutes");

router.use("/users", usersRoutes);
// router.use("/stores", storesRoutes);
router.use("/products", productsRoutes);
router.use("/productReview", productReviewRoutes);

// Importar todos los routers;
//const UsersRoutes = require("./usersRoutes");
const paymentsRoutes = require("./paymentsRoutes");

// Configurar los routers
//router.use("/users", UsersRoutes);
router.use("/payments", paymentsRoutes);

module.exports = router;
