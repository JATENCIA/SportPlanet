const { Router } = require("express");
const router = Router();

// Importar todos los routers;
//const UsersRoutes = require("./usersRoutes");

// Configurar los routers
//router.use("/users", UsersRoutes);


const usersRoutes = require("./usersRoutes");
// const storesRoutes = require("./storesRoutes");
const productsRoutes = require("./productsRoutes");
const productReviewRoutes = require("./productReviewRoutes");
const paymentsRoutes = require("./paymentsRoutes");

router.use("/users", usersRoutes);
// router.use("/stores", storesRoutes);
router.use("/products", productsRoutes);
router.use("/productReview", productReviewRoutes);
router.use("/payments", paymentsRoutes);


// Importar todos los routers;
const UsersRoutes = require("./usersRoutes");
const PaymentsRoutes = require("./paymentsRoutes");

// Configurar los routers
router.use("/users", UsersRoutes);
router.use("/payments", PaymentsRoutes);

module.exports = router;
